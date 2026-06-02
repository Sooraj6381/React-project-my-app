import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faScissors } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <>
    <div className='heading1'>
     <span className='headline1'><h1>MADRAS</h1></span>
     <span className='headLine2'><h1><FontAwesomeIcon icon={faScissors}/>SALOON</h1></span>
     </div>
    </>
  )
}

export default App
