import { BrowserRouter } from 'react-router-dom';
import {Canvas} from '@react-three/fiber'
import { About,Navbar,Hero, Contact, StarsCanvas } from './components/components'

const App = () =>{
  return(
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
  
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    
    </BrowserRouter>
  )
}
export default App