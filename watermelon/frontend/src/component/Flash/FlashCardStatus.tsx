/**
 * Flash Status Component
 */

import { fetchFlashCardStatus } from "../../library/FlashData";

export default function FlashCardStatus({
  cardId,
}: {
  cardId: string;
}) {
  const flashCardStatus = async () => {
    console.debug('Fetching Flash Card Status...');
    try {
      const status = await fetchFlashCardStatus();
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
