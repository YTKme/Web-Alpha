/**
 * Home
 */

import Navigation from "./component/Header/Navigation";

function Home() {
  return (
    <div className='d-flex flex-column h-100'>
      <Navigation page='Home' />
      <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        <h1>Hello Watermelon Home!</h1>
      </div>
    </div>
  );
}

export default Home;
