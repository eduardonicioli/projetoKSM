// biome-ignore-all lint:
import { useQuery } from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import type {
  GetAllCustomerGroups200,
  GetAllCustomerGroups204,
  GetAllCustomers200,
  GetAllCustomers204,
  GetAllCustomersParams,
  GetCustomerById200,
  GetCustomerById404,
} from '../../models'

import { customInstance } from '../../mutator/custom-instance'
import type { ErrorType } from '../../mutator/custom-instance'

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1]

/**
 * @summary Get all customers
 */
export const getAllCustomers = (
  params?: GetAllCustomersParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<GetAllCustomers200 | GetAllCustomers204>(
    { url: `/customers`, method: 'GET', params, signal },
    options
  )
}

export const getGetAllCustomersQueryKey = (params?: GetAllCustomersParams) => {
  return [`/customers`, ...(params ? [params] : [])] as const
}

export const getGetAllCustomersQueryOptions = <
  TData = Awaited<ReturnType<typeof getAllCustomers>>,
  TError = ErrorType<unknown>,
>(
  params?: GetAllCustomersParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllCustomers>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetAllCustomersQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getAllCustomers>>> = ({
    signal,
  }) => getAllCustomers(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getAllCustomers>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetAllCustomersQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAllCustomers>>
>
export type GetAllCustomersQueryError = ErrorType<unknown>

export function useGetAllCustomers<
  TData = Awaited<ReturnType<typeof getAllCustomers>>,
  TError = ErrorType<unknown>,
>(
  params: undefined | GetAllCustomersParams,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllCustomers>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAllCustomers>>,
          TError,
          Awaited<ReturnType<typeof getAllCustomers>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllCustomers<
  TData = Awaited<ReturnType<typeof getAllCustomers>>,
  TError = ErrorType<unknown>,
>(
  params?: GetAllCustomersParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllCustomers>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAllCustomers>>,
          TError,
          Awaited<ReturnType<typeof getAllCustomers>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllCustomers<
  TData = Awaited<ReturnType<typeof getAllCustomers>>,
  TError = ErrorType<unknown>,
>(
  params?: GetAllCustomersParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllCustomers>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get all customers
 */

export function useGetAllCustomers<
  TData = Awaited<ReturnType<typeof getAllCustomers>>,
  TError = ErrorType<unknown>,
>(
  params?: GetAllCustomersParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllCustomers>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetAllCustomersQueryOptions(params, options)

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get all customer groups
 */
export const getAllCustomerGroups = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<GetAllCustomerGroups200 | GetAllCustomerGroups204>(
    { url: `/customers/groups`, method: 'GET', signal },
    options
  )
}

export const getGetAllCustomerGroupsQueryKey = () => {
  return [`/customers/groups`] as const
}

export const getGetAllCustomerGroupsQueryOptions = <
  TData = Awaited<ReturnType<typeof getAllCustomerGroups>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof getAllCustomerGroups>>,
      TError,
      TData
    >
  >
  request?: SecondParameter<typeof customInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetAllCustomerGroupsQueryKey()

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getAllCustomerGroups>>
  > = ({ signal }) => getAllCustomerGroups(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getAllCustomerGroups>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetAllCustomerGroupsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAllCustomerGroups>>
>
export type GetAllCustomerGroupsQueryError = ErrorType<unknown>

export function useGetAllCustomerGroups<
  TData = Awaited<ReturnType<typeof getAllCustomerGroups>>,
  TError = ErrorType<unknown>,
>(
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllCustomerGroups>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAllCustomerGroups>>,
          TError,
          Awaited<ReturnType<typeof getAllCustomerGroups>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllCustomerGroups<
  TData = Awaited<ReturnType<typeof getAllCustomerGroups>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllCustomerGroups>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getAllCustomerGroups>>,
          TError,
          Awaited<ReturnType<typeof getAllCustomerGroups>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetAllCustomerGroups<
  TData = Awaited<ReturnType<typeof getAllCustomerGroups>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllCustomerGroups>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get all customer groups
 */

export function useGetAllCustomerGroups<
  TData = Awaited<ReturnType<typeof getAllCustomerGroups>>,
  TError = ErrorType<unknown>,
>(
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getAllCustomerGroups>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetAllCustomerGroupsQueryOptions(options)

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get customer by id
 */
export const getCustomerById = (
  id: number,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal
) => {
  return customInstance<GetCustomerById200>(
    { url: `/customers/${id}`, method: 'GET', signal },
    options
  )
}

export const getGetCustomerByIdQueryKey = (id: number) => {
  return [`/customers/${id}`] as const
}

export const getGetCustomerByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getCustomerById>>,
  TError = ErrorType<GetCustomerById404>,
>(
  id: number,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getCustomerById>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  }
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetCustomerByIdQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getCustomerById>>> = ({
    signal,
  }) => getCustomerById(id, requestOptions, signal)

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getCustomerById>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GetCustomerByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getCustomerById>>
>
export type GetCustomerByIdQueryError = ErrorType<GetCustomerById404>

export function useGetCustomerById<
  TData = Awaited<ReturnType<typeof getCustomerById>>,
  TError = ErrorType<GetCustomerById404>,
>(
  id: number,
  options: {
    query: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getCustomerById>>,
        TError,
        TData
      >
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCustomerById>>,
          TError,
          Awaited<ReturnType<typeof getCustomerById>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): DefinedUseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetCustomerById<
  TData = Awaited<ReturnType<typeof getCustomerById>>,
  TError = ErrorType<GetCustomerById404>,
>(
  id: number,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getCustomerById>>,
        TError,
        TData
      >
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getCustomerById>>,
          TError,
          Awaited<ReturnType<typeof getCustomerById>>
        >,
        'initialData'
      >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
export function useGetCustomerById<
  TData = Awaited<ReturnType<typeof getCustomerById>>,
  TError = ErrorType<GetCustomerById404>,
>(
  id: number,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getCustomerById>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
}
/**
 * @summary Get customer by id
 */

export function useGetCustomerById<
  TData = Awaited<ReturnType<typeof getCustomerById>>,
  TError = ErrorType<GetCustomerById404>,
>(
  id: number,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getCustomerById>>,
        TError,
        TData
      >
    >
    request?: SecondParameter<typeof customInstance>
  },
  queryClient?: QueryClient
): UseQueryResult<TData, TError> & {
  queryKey: DataTag<QueryKey, TData, TError>
} {
  const queryOptions = getGetCustomerByIdQueryOptions(id, options)

  const query = useQuery(queryOptions, queryClient) as UseQueryResult<
    TData,
    TError
  > & { queryKey: DataTag<QueryKey, TData, TError> }

  query.queryKey = queryOptions.queryKey

  return query
}
