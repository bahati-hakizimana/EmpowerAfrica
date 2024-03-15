import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Career from './components/careers/Career';

const router = () => {
    const router = createBrowserRouter([
        {
          path: '/careers',
          Element :<Career />
        }
        
      ]);
      
    }
export default router
