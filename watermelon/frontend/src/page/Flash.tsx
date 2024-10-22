/**
 * Flash Page
 */

import { Suspense } from "react";

// Component
import { FlashCardStatus } from "../component/Flash/FlashStatus";
import Navigation from "../component/Header/Navigation";
import { FlashCardStatusSkeleton } from "../component/Skeleton";

// Style
import './Flash.scss';

const cardList = [
  {
    id: 'alpha',
    header: 'Feature Alpha',
    body: 'Alpha',
    footer: 'Alpha',
  },
  {
    id: 'beta',
    header: 'Feature Beta',
    body: 'Beta',
    footer: 'Beta',
  },
  {
    id: 'gamma',
    header: 'Feature Gamma',
    body: 'Gamma',
    footer: 'Gamma',
  },
  {
    id: 'delta',
    header: 'Feature Delta',
    body: 'Delta',
    footer: 'Delta',
  },
]

export default function Flash() {
  return (
    <div className='d-flex flex-column h-100 p-3'>
      <Navigation page='Home' />
      <div className='d-flex flex-column justify-content-center align-items-center flex-grow-1'>
        <h1>Hello Flash!</h1>
        <div className='container text-center'>
          <div className='row'>
            {
              cardList.map((card) => {
                return (
                  <div key={card.id} className='col-sm-1 col-md-2 col-lg-3 mb-3'>
                    <div className='card w-100 sm'>
                      <div className='card-header'>
                        {card.header}
                      </div>
                      <div className='card-body'>
                        {card.body}:
                        <Suspense fallback={<FlashCardStatusSkeleton />}>
                          <FlashCardStatus cardId={card.id} />
                        </Suspense>
                      </div>
                      <div className='card-footer'>
                        {card.footer}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};
