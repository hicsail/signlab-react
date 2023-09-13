/* Generated File DO NOT EDIT. */
/* tslint:disable */
import * as Types from '../graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetStudyQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;

export type GetStudyQuery = {
  __typename?: 'Query';
  getStudy: {
    __typename?: 'StudyModel';
    id: string;
    name: string;
    description?: string | null;
    logo?: string | null;
    muiTheme: any;
    homePage?: string | null;
    redirectUrl?: string | null;
    createdAt: any;
    updatedAt: any;
    deletedAt?: any | null;
    settings: { __typename?: 'StudySettingsModel'; allowSignup: boolean; displayStudyName: boolean };
    authMethods: { __typename?: 'StudyAuthMethodsModel'; emailAuth: boolean; googleAuth: boolean };
  };
};

export type ListStudysQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ListStudysQuery = {
  __typename?: 'Query';
  listStudys: Array<{ __typename?: 'StudyModel'; id: string; name: string; description?: string | null; logo?: string | null }>;
};

export type UpdateStudySettingsMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  displayStudyName?: Types.InputMaybe<Types.Scalars['Boolean']>;
  allowSignup?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;

export type UpdateStudySettingsMutation = {
  __typename?: 'Mutation';
  updateStudySettings: {
    __typename?: 'StudyModel';
    id: string;
    name: string;
    description?: string | null;
    logo?: string | null;
    homePage?: string | null;
    redirectUrl?: string | null;
    settings: { __typename?: 'StudySettingsModel'; displayStudyName: boolean; allowSignup: boolean };
    authMethods: { __typename?: 'StudyAuthMethodsModel'; googleAuth: boolean; emailAuth: boolean };
  };
};

export type UpdateStudyAuthMethodsMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  googleAuth?: Types.InputMaybe<Types.Scalars['Boolean']>;
  emailAuth?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;

export type UpdateStudyAuthMethodsMutation = {
  __typename?: 'Mutation';
  updateStudyAuthMethods: {
    __typename?: 'StudyModel';
    id: string;
    name: string;
    description?: string | null;
    logo?: string | null;
    homePage?: string | null;
    redirectUrl?: string | null;
    settings: { __typename?: 'StudySettingsModel'; displayStudyName: boolean; allowSignup: boolean };
    authMethods: { __typename?: 'StudyAuthMethodsModel'; googleAuth: boolean; emailAuth: boolean };
  };
};

export type UpdateStudyMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  name?: Types.InputMaybe<Types.Scalars['String']>;
  description?: Types.InputMaybe<Types.Scalars['String']>;
  logo?: Types.InputMaybe<Types.Scalars['String']>;
  muiTheme?: Types.InputMaybe<Types.Scalars['JSON']>;
  homePage?: Types.InputMaybe<Types.Scalars['String']>;
  redirectUrl?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type UpdateStudyMutation = {
  __typename?: 'Mutation';
  updateStudy: {
    __typename?: 'StudyModel';
    id: string;
    name: string;
    description?: string | null;
    logo?: string | null;
    muiTheme: any;
    homePage?: string | null;
    redirectUrl?: string | null;
    createdAt: any;
    updatedAt: any;
    deletedAt?: any | null;
    settings: { __typename?: 'StudySettingsModel'; displayStudyName: boolean; allowSignup: boolean };
    authMethods: { __typename?: 'StudyAuthMethodsModel'; googleAuth: boolean; emailAuth: boolean };
  };
};

export const GetStudyDocument = gql`
  query getStudy($id: String!) {
    getStudy(id: $id) {
      id
      name
      description
      logo
      muiTheme
      homePage
      redirectUrl
      createdAt
      updatedAt
      deletedAt
      settings {
        allowSignup
        displayStudyName
      }
      authMethods {
        emailAuth
        googleAuth
      }
    }
  }
`;

/**
 * __useGetStudyQuery__
 *
 * To run a query within a React component, call `useGetStudyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetStudyQuery(baseOptions: Apollo.QueryHookOptions<GetStudyQuery, GetStudyQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetStudyQuery, GetStudyQueryVariables>(GetStudyDocument, options);
}
export function useGetStudyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudyQuery, GetStudyQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetStudyQuery, GetStudyQueryVariables>(GetStudyDocument, options);
}
export type GetStudyQueryHookResult = ReturnType<typeof useGetStudyQuery>;
export type GetStudyLazyQueryHookResult = ReturnType<typeof useGetStudyLazyQuery>;
export type GetStudyQueryResult = Apollo.QueryResult<GetStudyQuery, GetStudyQueryVariables>;
export const ListStudysDocument = gql`
  query listStudys {
    listStudys {
      id
      name
      description
      logo
    }
  }
`;

/**
 * __useListStudysQuery__
 *
 * To run a query within a React component, call `useListStudysQuery` and pass it any options that fit your needs.
 * When your component renders, `useListStudysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListStudysQuery({
 *   variables: {
 *   },
 * });
 */
export function useListStudysQuery(baseOptions?: Apollo.QueryHookOptions<ListStudysQuery, ListStudysQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ListStudysQuery, ListStudysQueryVariables>(ListStudysDocument, options);
}
export function useListStudysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListStudysQuery, ListStudysQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ListStudysQuery, ListStudysQueryVariables>(ListStudysDocument, options);
}
export type ListStudysQueryHookResult = ReturnType<typeof useListStudysQuery>;
export type ListStudysLazyQueryHookResult = ReturnType<typeof useListStudysLazyQuery>;
export type ListStudysQueryResult = Apollo.QueryResult<ListStudysQuery, ListStudysQueryVariables>;
export const UpdateStudySettingsDocument = gql`
  mutation updateStudySettings($id: String!, $displayStudyName: Boolean, $allowSignup: Boolean) {
    updateStudySettings(id: $id, studySettings: { displayStudyName: $displayStudyName, allowSignup: $allowSignup }) {
      id
      name
      description
      logo
      homePage
      redirectUrl
      settings {
        displayStudyName
        allowSignup
      }
      authMethods {
        googleAuth
        emailAuth
      }
    }
  }
`;
export type UpdateStudySettingsMutationFn = Apollo.MutationFunction<UpdateStudySettingsMutation, UpdateStudySettingsMutationVariables>;

/**
 * __useUpdateStudySettingsMutation__
 *
 * To run a mutation, you first call `useUpdateStudySettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudySettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudySettingsMutation, { data, loading, error }] = useUpdateStudySettingsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      displayStudyName: // value for 'displayStudyName'
 *      allowSignup: // value for 'allowSignup'
 *   },
 * });
 */
export function useUpdateStudySettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudySettingsMutation, UpdateStudySettingsMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateStudySettingsMutation, UpdateStudySettingsMutationVariables>(UpdateStudySettingsDocument, options);
}
export type UpdateStudySettingsMutationHookResult = ReturnType<typeof useUpdateStudySettingsMutation>;
export type UpdateStudySettingsMutationResult = Apollo.MutationResult<UpdateStudySettingsMutation>;
export type UpdateStudySettingsMutationOptions = Apollo.BaseMutationOptions<UpdateStudySettingsMutation, UpdateStudySettingsMutationVariables>;
export const UpdateStudyAuthMethodsDocument = gql`
  mutation updateStudyAuthMethods($id: String!, $googleAuth: Boolean, $emailAuth: Boolean) {
    updateStudyAuthMethods(id: $id, studyAuthMethods: { googleAuth: $googleAuth, emailAuth: $emailAuth }) {
      id
      name
      description
      logo
      homePage
      redirectUrl
      settings {
        displayStudyName
        allowSignup
      }
      authMethods {
        googleAuth
        emailAuth
      }
    }
  }
`;
export type UpdateStudyAuthMethodsMutationFn = Apollo.MutationFunction<UpdateStudyAuthMethodsMutation, UpdateStudyAuthMethodsMutationVariables>;

/**
 * __useUpdateStudyAuthMethodsMutation__
 *
 * To run a mutation, you first call `useUpdateStudyAuthMethodsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudyAuthMethodsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudyAuthMethodsMutation, { data, loading, error }] = useUpdateStudyAuthMethodsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      googleAuth: // value for 'googleAuth'
 *      emailAuth: // value for 'emailAuth'
 *   },
 * });
 */
export function useUpdateStudyAuthMethodsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudyAuthMethodsMutation, UpdateStudyAuthMethodsMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateStudyAuthMethodsMutation, UpdateStudyAuthMethodsMutationVariables>(UpdateStudyAuthMethodsDocument, options);
}
export type UpdateStudyAuthMethodsMutationHookResult = ReturnType<typeof useUpdateStudyAuthMethodsMutation>;
export type UpdateStudyAuthMethodsMutationResult = Apollo.MutationResult<UpdateStudyAuthMethodsMutation>;
export type UpdateStudyAuthMethodsMutationOptions = Apollo.BaseMutationOptions<UpdateStudyAuthMethodsMutation, UpdateStudyAuthMethodsMutationVariables>;
export const UpdateStudyDocument = gql`
  mutation updateStudy($id: String!, $name: String, $description: String, $logo: String, $muiTheme: JSON, $homePage: String, $redirectUrl: String) {
    updateStudy(id: $id, settings: { name: $name, description: $description, logo: $logo, muiTheme: $muiTheme, homePage: $homePage, redirectUrl: $redirectUrl }) {
      id
      name
      description
      logo
      muiTheme
      homePage
      redirectUrl
      createdAt
      updatedAt
      deletedAt
      settings {
        displayStudyName
        allowSignup
      }
      authMethods {
        googleAuth
        emailAuth
      }
    }
  }
`;
export type UpdateStudyMutationFn = Apollo.MutationFunction<UpdateStudyMutation, UpdateStudyMutationVariables>;

/**
 * __useUpdateStudyMutation__
 *
 * To run a mutation, you first call `useUpdateStudyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudyMutation, { data, loading, error }] = useUpdateStudyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      logo: // value for 'logo'
 *      muiTheme: // value for 'muiTheme'
 *      homePage: // value for 'homePage'
 *      redirectUrl: // value for 'redirectUrl'
 *   },
 * });
 */
export function useUpdateStudyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudyMutation, UpdateStudyMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateStudyMutation, UpdateStudyMutationVariables>(UpdateStudyDocument, options);
}
export type UpdateStudyMutationHookResult = ReturnType<typeof useUpdateStudyMutation>;
export type UpdateStudyMutationResult = Apollo.MutationResult<UpdateStudyMutation>;
export type UpdateStudyMutationOptions = Apollo.BaseMutationOptions<UpdateStudyMutation, UpdateStudyMutationVariables>;
