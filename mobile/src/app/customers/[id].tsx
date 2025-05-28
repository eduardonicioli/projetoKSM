import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import { Loading } from '@/components/loading'
import { useCustomerDetailsContainer } from '@/hooks/use-customer-details-container'
import { UseCustomersDetilasScreen } from '@/screens/customers/details/use-customer-details-screen'

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>()

  const { customerInfos, lastSales, totalPurchasePerMonth, isLoading } =
    useCustomerDetailsContainer(Number(id))

  if (isLoading) return <Loading />

  if (!customerInfos) return <Text>Erro ao buscar os dados</Text>

  return (
    <UseCustomersDetilasScreen
      customerInfos={customerInfos}
      lastSales={lastSales}
      totalPurchasePerMonth={totalPurchasePerMonth}
    />
  )
}
