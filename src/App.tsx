import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { ThemeProvider } from './theme/ThemeProvider';
import { NavBar } from './components/NavigationBar';
import { NewProject } from './pages/projects/NewProject';
import { ProjectControl } from './pages/projects/ProjectControl';
import { SuccessPage } from './pages/SuccessPage';
import { NewStudy } from './pages/studies/NewStudy';
import { ContributePage } from './pages/contribute/Contribute';
import { TagView } from './components/TagView';
import { EnvironmentContextProvider } from './context/EnvironmentContext';
import { StudyControl } from './pages/studies/StudyControl';
import { ProjectAccess } from './pages/datasets/ProjectAccess';
import { ProjectUserPermissions } from './pages/projects/ProjectUserPermissions';
import { StudyUserPermissions } from './pages/studies/UserPermissions';
import { DownloadTags } from './pages/studies/DownloadTags';
import { LoginPage } from './pages/LoginPage';
import { DatasetControls } from './pages/datasets/DatasetControls';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <EnvironmentContextProvider>
          <NavBar />
          <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/loginpage'} element={<LoginPage />} />
            <Route path={'/newproject'} element={<NewProject />} />
            <Route path={'/projectcontrol'} element={<ProjectControl />} />
            <Route path={'/userpermissions'} element={<ProjectUserPermissions />} />
            <Route path={'/newstudy'} element={<NewStudy />} />
            <Route path={'/studycontrol'} element={<StudyControl />} />
            <Route path={'/studyuserpermissions'} element={<StudyUserPermissions />} />
            <Route path={'/downloadtags'} element={<DownloadTags />} />
            <Route path={'/successpage'} element={<SuccessPage />} />
            <Route path={'/datasetcontrols'} element={<DatasetControls />} />
            <Route path={'/projectaccess'} element={<ProjectAccess />} />
            <Route path={'/contribute'} element={<ContributePage />} />
            <Route path={'/tagging'} element={<TagView />} />
          </Routes>
        </EnvironmentContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
