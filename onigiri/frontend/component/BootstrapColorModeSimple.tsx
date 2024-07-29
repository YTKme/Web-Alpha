/**
 * Bootstrap Color Mode Simple
 */

'use client';

export default function BootstrapColorModeSimple() {

  return (
    <div>
      <p>Current Theme:</p>
      <button type="button" className="btn btn-light m-1">
        Light
      </button>
      <button type="button" className="btn btn-dark m-1">
        Dark
      </button>
      <button type="button" className="btn btn-secondary m-1">
        System
      </button>

      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonDark" data-bs-toggle="dropdown" aria-expanded="true">
          Default dropdown
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
          <li><a className="dropdown-item active" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
  );
}
