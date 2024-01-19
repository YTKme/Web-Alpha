/**
 * Application
 * Main Application
 */

import 'bootstrap/dist/css/bootstrap.min.css'
import './Application.css'

import ModeToggleBootstrap from './component/ModeToggle/ModeToggleBootstrap'

function Application() {
  return (
    <>
      <h1>Hello Watermelon!</h1>
      <ModeToggleBootstrap />
    </>
  )
}

export default Application
