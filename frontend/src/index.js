import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layoutpage from './Work/layoutPage';
import Homepage from './Work/homePage';
import Insertdata from './Work/insertPage';
import Crud from './Work/crudPage';
import GetById from './Work/getById';
import Updatedata from './Work/updatePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layoutpage/>}>
            <Route path='/home' element={<Homepage/>}/>
            <Route path='/insert' element={<Insertdata/>}/>
            <Route path='/getAll' element={<Crud/>}/>
            <Route path='/getAll/:id' element={<GetById/>}/>
            <Route path='/getAll/update/:id' element={<Updatedata/>}/>

            </Route>
        </Routes>
    </BrowserRouter>
    
);