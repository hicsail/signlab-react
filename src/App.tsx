import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TagPage } from './pages/tag';
import { ThemeProvider } from './theme/theme.provider';

function App() {
  const router = createBrowserRouter([
    {
      path: '/tag',
      element: <TagPage />
    }
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
