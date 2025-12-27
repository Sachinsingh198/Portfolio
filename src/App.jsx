import {Navbar} from "@/layout/Navbar";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Projects} from "@/sections/Projects";
import {Experience} from "@/sections/Experience";
import {Testimonials} from "@/sections/Testimonials";
import {Contact} from "@/sections/Contact";
import { Toaster } from 'react-hot-toast';


function App() {
  
  return(  
    <div className="main-h-screen overflow-x-hidden">
      
      <Navbar/>
      <main>
        {/* <Toaster position="bottom-right" reverseOrder={false} /> */}
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Testimonials/>
        <Contact/>
      </main>
    </div>
  )
}

export default App
