import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TagPage } from './pages/tag';

function App() {
  const router = createBrowserRouter([
    {
      path: '/tag',
      element: <TagPage />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
