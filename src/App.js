
import './App.css';
import Demo from './Demo';
import Data from './Data';
import User from './User';
// import { useState,useEffect } from 'react';

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {createContext, useState } from 'react';


export const DataContext = createContext();


function App() {

  // let globalName = "subroto";

  let [name,setName]= useState("Subrato");

  return(
    <div>

      <h1>App Component</h1>

      {name}

      <DataContext.Provider value={{name,setName}}>

        <BrowserRouter>        
          <ul>
            <li>
              <Link to="/user"> User</Link>
            </li>
            <li>
              <Link to="/demo/Subrato"> Demo</Link>
            </li>
            <li>
              <Link to="/data"> Data</Link>
            </li>
          </ul>
        
          <Routes>

            <Route path='/user' element={<User/>}/>
            <Route path='/demo/:name' element={<Demo/>}/>
            <Route path='/data' element={<Data/>}/>

          </Routes>
        </BrowserRouter>

      </DataContext.Provider>

    </div>
  )

}

export default App;
