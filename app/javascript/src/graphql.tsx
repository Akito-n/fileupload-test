import gql from 'graphql-tag';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime */
  DateTime: any;
  /** file */
  File: any;
};


/** Autogenerated input type of EditUser */
export type EditUserInput = {
  userId: Scalars['ID'];
  example?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of EditUser */
export type EditUserPayload = {
  __typename?: 'EditUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type Mutation = {
  __typename?: 'Mutation';
  editUser?: Maybe<EditUserPayload>;
  say?: Maybe<SayPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  updateUserOnlyName?: Maybe<UpdateUserOnlyNamePayload>;
};


export type MutationEditUserArgs = {
  input: EditUserInput;
};


export type MutationSayArgs = {
  input: SayInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateUserOnlyNameArgs = {
  input: UpdateUserOnlyNameInput;
};

/** Autogenerated return type of OnMessageAdded */
export type OnMessageAddedPayload = {
  __typename?: 'OnMessageAddedPayload';
  message: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Autogenerated input type of Say */
export type SayInput = {
  text: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of Say */
export type SayPayload = {
  __typename?: 'SayPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onMessageAdded: OnMessageAddedPayload;
};

/** Autogenerated input type of UpdateUser */
export type UpdateUserInput = {
  userId: Scalars['ID'];
  avatar?: Maybe<Scalars['File']>;
  example?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateUserOnlyName */
export type UpdateUserOnlyNameInput = {
  userId: Scalars['ID'];
  example?: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateUserOnlyName */
export type UpdateUserOnlyNamePayload = {
  __typename?: 'UpdateUserOnlyNamePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

/** Autogenerated return type of UpdateUser */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['File']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['File']>;
  imageUrl?: Maybe<Scalars['String']>;
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

export type UpdateUserOnlyNameMutationVariables = Exact<{
  input: UpdateUserOnlyNameInput;
}>;


export type UpdateUserOnlyNameMutation = (
  { __typename?: 'Mutation' }
  & { updateUserOnlyName?: Maybe<(
    { __typename?: 'UpdateUserOnlyNamePayload' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'UpdateUserPayload' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  )> }
);

export type SayMutationVariables = Exact<{
  input: SayInput;
}>;


export type SayMutation = (
  { __typename?: 'Mutation' }
  & { say?: Maybe<(
    { __typename?: 'SayPayload' }
    & Pick<SayPayload, 'completed'>
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { currentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'avatar' | 'image' | 'imageUrl'>
  )> }
);

export type OnMessageAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnMessageAddedSubscription = (
  { __typename?: 'Subscription' }
  & { onMessageAdded: (
    { __typename?: 'OnMessageAddedPayload' }
    & Pick<OnMessageAddedPayload, 'message'>
  ) }
);


export const UpdateUserOnlyNameDocument = gql`
    mutation updateUserOnlyName($input: UpdateUserOnlyNameInput!) {
  updateUserOnlyName(input: $input) {
    user {
      id
    }
  }
}
    `;
export type UpdateUserOnlyNameMutationFn = Apollo.MutationFunction<UpdateUserOnlyNameMutation, UpdateUserOnlyNameMutationVariables>;

/**
 * __useUpdateUserOnlyNameMutation__
 *
 * To run a mutation, you first call `useUpdateUserOnlyNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserOnlyNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserOnlyNameMutation, { data, loading, error }] = useUpdateUserOnlyNameMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserOnlyNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserOnlyNameMutation, UpdateUserOnlyNameMutationVariables>) {
        return Apollo.useMutation<UpdateUserOnlyNameMutation, UpdateUserOnlyNameMutationVariables>(UpdateUserOnlyNameDocument, baseOptions);
      }
export type UpdateUserOnlyNameMutationHookResult = ReturnType<typeof useUpdateUserOnlyNameMutation>;
export type UpdateUserOnlyNameMutationResult = Apollo.MutationResult<UpdateUserOnlyNameMutation>;
export type UpdateUserOnlyNameMutationOptions = Apollo.BaseMutationOptions<UpdateUserOnlyNameMutation, UpdateUserOnlyNameMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    user {
      id
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const SayDocument = gql`
    mutation say($input: SayInput!) {
  say(input: $input) {
    completed
  }
}
    `;
export type SayMutationFn = Apollo.MutationFunction<SayMutation, SayMutationVariables>;

/**
 * __useSayMutation__
 *
 * To run a mutation, you first call `useSayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sayMutation, { data, loading, error }] = useSayMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSayMutation(baseOptions?: Apollo.MutationHookOptions<SayMutation, SayMutationVariables>) {
        return Apollo.useMutation<SayMutation, SayMutationVariables>(SayDocument, baseOptions);
      }
export type SayMutationHookResult = ReturnType<typeof useSayMutation>;
export type SayMutationResult = Apollo.MutationResult<SayMutation>;
export type SayMutationOptions = Apollo.BaseMutationOptions<SayMutation, SayMutationVariables>;
export const CurrentUserDocument = gql`
    query currentUser {
  currentUser {
    id
    email
    avatar
    image
    imageUrl
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export function refetchCurrentUserQuery(variables?: CurrentUserQueryVariables) {
      return { query: CurrentUserDocument, variables: variables }
    }
export const OnMessageAddedDocument = gql`
    subscription onMessageAdded {
  onMessageAdded {
    message
  }
}
    `;

/**
 * __useOnMessageAddedSubscription__
 *
 * To run a query within a React component, call `useOnMessageAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnMessageAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnMessageAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnMessageAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnMessageAddedSubscription, OnMessageAddedSubscriptionVariables>) {
        return Apollo.useSubscription<OnMessageAddedSubscription, OnMessageAddedSubscriptionVariables>(OnMessageAddedDocument, baseOptions);
      }
export type OnMessageAddedSubscriptionHookResult = ReturnType<typeof useOnMessageAddedSubscription>;
export type OnMessageAddedSubscriptionResult = Apollo.SubscriptionResult<OnMessageAddedSubscription>;