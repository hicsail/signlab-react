import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { StudyModel } from '../graphql/graphql';
import { useGetStudyLazyQuery } from '../graphql/study/study';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import { useAuth } from '../context/AuthContext';

export interface StudyContextProps {
  study?: StudyModel;
  updateStudy: (updatedStudy: StudyModel) => void;
}

const StudyContext = createContext<StudyContextProps>({} as StudyContextProps);

export interface StudyProviderProps {
  children: React.ReactNode;
}

export const studyProvider: FC<StudyProviderProps> = (props) => {
  const [study, setStudy] = useState<StudyModel>();
  const { decoded_token } = useAuth();
  const [getStudy] = useGetStudyLazyQuery();
  const theme = useTheme();
  const [studyTheme, setStudyTheme] = useState(theme);

  useEffect(() => {
    if (decoded_token?.studyId) {
      getStudy({ variables: { id: decoded_token.studyId } }).then((data: any) => {
        if (data?.getstudy) {
          setStudy(data.getstudy as StudyModel);
          setStudyTheme(
            createTheme({
              ...theme,
              ...data.getstudy.muiTheme
            })
          );
        }
      });
    }
  }, [decoded_token]);

  const updateStudy = (updatedStudy: StudyModel) => {
    setStudy(updatedStudy);
  };

  return (
    <StudyContext.Provider value={{ study, updateStudy }}>
      <ThemeProvider
        theme={createTheme({
          ...studyTheme
        })}
      >
        {props.children}
      </ThemeProvider>
    </StudyContext.Provider>
  );
};

export const useStudy = () => useContext(StudyContext);
