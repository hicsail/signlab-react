import { createContext, useState } from 'react';

const SampleContext = createContext({ study: '', project: '' });

const SampleContextProvider = (props: any) => {
  const [study, setStudy] = useState('sn1');
  const project = 'pn1';

  return <SampleContext.Provider value={{ study, project }}>{props.children}</SampleContext.Provider>;
};

export { SampleContext, SampleContextProvider };
