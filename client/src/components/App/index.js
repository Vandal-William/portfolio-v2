import { Route, Routes } from 'react-router-dom';

import NavBar from '../NavBar';
import About from '../About';
import Contact from '../Contact';
import Profil from '../Profil';
import Project from '../Project';
import Skills from '../Skills';

function App (){
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Profil />}/>
                <Route path='/about' element={<About />}/> 
                <Route path='/contact' element={<Contact />}/> 
                <Route path='/project' element={<Project />}/>
                <Route path='/skills' element={<Skills />}/>    
            </Routes>  
        </>
    )
}

export default App;