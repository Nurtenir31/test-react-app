import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';


import Dashboard from './components/DashBoard/Dashboard';
import Tabs from './components/Tabs';
import Settings from './components/Setting/Settings';


import { InnerContent } from './components/InnerContent';



const MainRoutes = ()=> (

    <Routes>
        <Route path='/' element={<InnerContent />}>
            <Route path='/' element={<Navigate replace to="dashboard"/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='tabs' element={<Tabs/>}/>
            <Route path='/settings' element={<Settings/>}/>
        </Route>
    </Routes>

  
)

export default MainRoutes;
