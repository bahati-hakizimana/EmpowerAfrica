import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Career from './components/careers/Career';
import Home from './components/Home';

const router = () => {
    const router = createBrowserRouter([
        {
          path: '/careers',
          Element :<Career />
        },
        // {
        //   path: '/',
        //   Element :<Home />
        // }
        
      ]);
      
    }
export default router
