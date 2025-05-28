import { Text, View } from 'react-native'
import type {
  GetCustomerById200Customer,
  GetCustomerById200LastSalesItem,
  GetCustomerById200TotalPurchasePerMonthItem,
} from '@/http/models'
import { UsePurchasePerMonth } from './purchase-per-month/use-purchase-per-month'

interface UseCustomersDetilasScreenProps {
  customerInfos: GetCustomerById200Customer
  lastSales: GetCustomerById200LastSalesItem[] | undefined
  totalPurchasePerMonth:
    | {
        x: string
        y: number
        z: number
      }[]
    | undefined
}

function UseCustomersDetilasScreen({
  customerInfos,
  lastSales,
  totalPurchasePerMonth,
}: UseCustomersDetilasScreenProps) {
  return (
    <View>
      <Text>Teste</Text>

      <UsePurchasePerMonth purchaseData={totalPurchasePerMonth} />
    </View>
  )
}

export { UseCustomersDetilasScreen }
