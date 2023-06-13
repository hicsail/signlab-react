import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TagPage } from './pages/tag';
import { HomePage } from './pages/Home/Home';
import { ThemeProvider } from './theme/ThemeProvider';
import { NavBar } from './components/NavigationBar';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/tag'} element={<TagPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
