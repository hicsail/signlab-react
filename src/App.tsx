import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TagPage } from './pages/tag';
import { ThemeProvider } from './theme/theme.provider';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/tag'} element={<TagPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
