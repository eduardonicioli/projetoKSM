import type { RawAxiosRequestHeaders } from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { useGetCustomerById } from '@/http/endpoints/customers/customers'
import { getHeaders } from '@/utils/utils'

function useCustomerDetailsContainer(id: number) {
  const [headers, setHeaders] = useState<RawAxiosRequestHeaders>()

  const { data, isLoading } = useGetCustomerById(id, {
    request: { headers },
    query: { enabled: !!id && !!headers },
  })

  const fetchAuthorizationHeader = async () => {
    const authorization = await getHeaders()

    if (authorization) setHeaders({ authorization })
  }

  const customerInfos = useMemo(() => data?.customer, [data?.customer])
  const lastSales = useMemo(() => data?.lastSales, [data?.lastSales])
  const totalPurchasePerMonth = useMemo(
    () =>
      data?.totalPurchasePerMonth.map(month => ({
        x: `${month.month}/${month.year}`,
        y: month.totalQuantity,
        z: month.totalPuchases,
      })),
    [data?.totalPurchasePerMonth]
  )

  useEffect(() => {
    fetchAuthorizationHeader()
  }, [])

  return { customerInfos, lastSales, totalPurchasePerMonth, isLoading }
}

export { useCustomerDetailsContainer }
