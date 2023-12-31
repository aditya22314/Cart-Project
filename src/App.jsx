
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Routing from './Components/Routing/Routing'


function App() {
 
  return (
    <>
     <div className="app"> 
       <Navbar/>
      <main>
       <Routing/>
      </main>
     </div>
    </>
  )
}

export default App
