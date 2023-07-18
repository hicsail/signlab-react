import { useContext } from 'react';
import { EnvContext } from '../context/EnvContext';
import { useLocalStorage } from './useLocalStorage';

export interface Project {
  name: string;
  description: string;
  authToken?: string;
}

const useProject = () => {
  const { project, setProject } = useContext(EnvContext);
  const { setItem } = useLocalStorage();

  const addProject = (project: Project) => {
    setProject(project);
    setItem('project', JSON.stringify(project));
  };

  const removeProject = () => {
    setProject(null);
    setItem('project', '');
  };

  return { project, setProject, addProject, removeProject };
};

export { useProject };
