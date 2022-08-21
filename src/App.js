import MainLayouts from "./components/Layouts/main.layouts";
import Albums from "./components/Albums/main.albums";
import  {BrowserRouter as Router, Routes, Route  } from"react-router-dom"



const App = () =>{
  return (
    <MainLayouts>
        
          <Router>
            <Routes>
              <Route path="/" element = { <h1>HOMEPAGE</h1>} />
              <Route path="/albums" element = { <Albums />} />
              <Route path ="/posts" element = { <h1>POSTING</h1>} />
              <Route path ="*" element = { <h1 className="text-center text-danger mt-8">404 NOT FOUND</h1>} />
            </Routes>
            
          </Router>
         
     
    </MainLayouts>
  )

}

export default App;
