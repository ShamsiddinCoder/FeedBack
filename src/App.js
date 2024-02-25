import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {router} from './router/router';
import Loyout from './router/Loyout';

export default function App() {
  return (
    <div>
      <Routes>
        {
          router?.map(({paths, elements: Component}, index) => (
            <Route 
              key={index}
              path={paths}
              element={
                <Loyout>
                  <Component />
                </Loyout>
              }
            />
          ))
        }
      </Routes>
    </div>
  )
}

