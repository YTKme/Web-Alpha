/**
 * Home
 */

import Navigation from "../component/Header/Navigation";

export default function Home() {
  return (
    <div className='d-flex flex-column h-100 px-3'>
      <Navigation page='/home' />
      <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        <h1>Home</h1>
      </div>
    </div>
  );
}
