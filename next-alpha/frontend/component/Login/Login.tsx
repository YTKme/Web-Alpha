/**
 * Login
 */

import Image from "next/image";

import './Login.scss';

export default function Login() {
  return (
    <div className='d-flex w-100 h-100'>
      <div className='w-100 m-auto'>
        <header className='text-center'>
          <Image src='/res/img/persimmon-1.svg' alt='Persimmon Logo' width={128} height={128} />
          <h1>Please Login</h1>
        </header>
        <main className='text-center'>
          <form>
            <section className='text-center'>
              <button className='btn btn-primary btn-lg' type='button'>Login</button>
            </section>
          </form>
        </main>
      </div>
    </div>
  );
}
