import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { ThemeProvider } from './theme/ThemeProvider';
import { NavBar } from './components/NavigationBar';
import { NewProject } from './pages/NewProject';
import { ProjectControl } from './pages/ProjectControl';
import { SuccessPage } from './pages/SuccessPage';
import { NewStudy } from './pages/NewStudy';
import { ContributePage } from './pages/Contribute';
import { TagView } from './pages/TagView';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/newproject'} element={<NewProject />} />
          <Route path={'/newstudy'} element={<NewStudy />} />
          <Route path={'/projectcontrol'} element={<ProjectControl />} />
          <Route path={'/successpage'} element={<SuccessPage />} />
          <Route path={'/contribute'} element={<ContributePage />} />
          <Route path={'/tagging'} element={<TagView />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
