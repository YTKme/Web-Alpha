/**
 * Flash Status Component
 */

import { fetchFlashCardStatus } from "../../library/FlashData";

export function FlashCardStatus({
  cardId,
}: {
  cardId: string;
}) {
  const flashCardStatus = async () => {
    console.debug('Fetching Flash Card Status...');
    try {
      const status = use(fetchFlashCardStatus());
      console.debug(`Flash Card Status: ${status}`);
      return status;
    } catch (error) {
      console.error('Failed To Fetch Flash Card Status:', error);
    }
  };
  flashCardStatus();

  return (
    <span className='badge text-bg-success mx-2 p-2'>Success</span>
  );
};

import { useEffect, useState } from 'react';

function use(promise: Promise<any>) {
  const [state, setState] = useState({ status: 'pending', value: null, reason: null });

  useEffect(() => {
    let isMounted = true;
    promise.then(
      result => {
        if (isMounted) {
          setState({ status: 'fulfilled', value: result, reason: null });
        }
      },
      reason => {
        if (isMounted) {
          setState({ status: 'rejected', value: null, reason });
        }
      }
    );
    return () => {
      isMounted = false;
    };
  }, [promise]);

  if (state.status === 'fulfilled') {
    return state.value;
  } else if (state.status === 'rejected') {
    throw state.reason;
  } else {
    throw promise;
  }
}
