import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faScissors } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <>
    <div className='heading1'>
     <FontAwesomeIcon icon={faScissors} className='font1'/>
     <span><h1>MADRAS</h1></span>
     <span><h1 >SALOON</h1></span>
     </div>
    </>
  )
}

export default App
