import { createContext, useState } from 'react';

const EnvironmentContext = createContext({ study: '', project: '' });

const EnvironmentContextProvider = (props: any) => {
  const [study] = useState('sn1');
  const project = 'pn1';

  return <EnvironmentContext.Provider value={{ study, project }}>{props.children}</EnvironmentContext.Provider>;
};

export { EnvironmentContext, EnvironmentContextProvider };
