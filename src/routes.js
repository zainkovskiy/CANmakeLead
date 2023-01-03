import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { App } from './App';
import { Service } from "components/Service";
import { HR } from "components/HR";
import { Review } from "components/Review";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'service/*',
        element: <Service />,
      },
      {
        path: 'hr',
        element: <HR />
      },
      {
        path: 'complaint',
        element: <Review />
      },
      {
        path: 'thank',
        element: <Review />
      },
      {
        path: 'another',
        element: <Review />
      },
    ]
  }
])