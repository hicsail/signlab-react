import { createContext } from 'react';
import { Project } from '../hooks/useProject';

interface EnvContext {
  project: Project | null;
  setProject: (project: Project | null) => void;
}

const EnvContext = createContext<EnvContext>({
  project: null,
  setProject: () => {}
});

export { EnvContext };
