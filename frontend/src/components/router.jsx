import React from 'react';
import { Route,BrowserRouter as Router, Routes , Navigate} from 'react-router-dom'
import Login from './login/login.jsx';

// function Child(){
//     let {id} = useParams();
//     console.log(id);
// }

function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={(<Navigate to ="/login"/>)}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;