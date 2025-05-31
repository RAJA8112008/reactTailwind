import data from './main'
import './App.css'
import Tours from './components/Tours';

const App=()=> {

const[tours,settours]=useState(main);

  return ( 
   <div>
    <Tour tours={tours}></Tour>
    </div>
  
    )
}

export default App
