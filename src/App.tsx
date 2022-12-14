import React from 'react';
import Root from './routes/root';
import NotFound from './routes/errors/notFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Authentication from './routes/authentication';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    path: '/auth',
    element: <Authentication />,
  },
]);

const App: React.FC = () => {
  return (
    <ProSidebarProvider>
      <RouterProvider router={router} />
    </ProSidebarProvider>
  );
};

export default App;
