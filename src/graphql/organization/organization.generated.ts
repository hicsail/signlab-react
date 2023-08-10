import * as Types from '../graphql';
import { gql } from '@apollo/client';
import { Injectable } from 'injection-js';
import { Apollo } from 'react-apollo';
export type GetOrganizationsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetOrganizationsQuery = { __typename?: 'Query', getOrganizations: Array<{ __typename?: 'Organization', _id: string, name: string }> };

export type FindOrganizationQueryVariables = Types.Exact<{
  organization: Types.Scalars['String'];
}>;


export type FindOrganizationQuery = { __typename?: 'Query', findOrganization: { __typename?: 'Organization', _id: string, name: string } };

export const GetOrganizationsDocument = gql`
    query getOrganizations {
  getOrganizations {
    _id
    name
  }
}
    `;

  @Injectable()
  export class GetOrganizationsGQL extends Apollo<GetOrganizationsQuery, GetOrganizationsQueryVariables> {
    document = GetOrganizationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindOrganizationDocument = gql`
    query findOrganization($organization: String!) {
  findOrganization(organization: $organization) {
    _id
    name
  }
}
    `;

  @Injectable()
  export class FindOrganizationGQL extends Apollo.Query<FindOrganizationQuery, FindOrganizationQueryVariables> {
    document = FindOrganizationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }