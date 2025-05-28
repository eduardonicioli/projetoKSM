import { IconAlertSquareRounded } from '@tabler/icons-react-native'
import { FlatList, Text, View } from 'react-native'
import { colors } from '@/constants/theme'
import type { GetCustomerById200LastSalesItem } from '@/http/models'
import { UseLastSalesItem } from '../../components/last-sales-item/use-last-sales-item'
import { s } from './styles'

type UseLastSalesProps = {
  topBuyers: GetCustomerById200LastSalesItem[]
}

const UseLastSales = ({ topBuyers }: UseLastSalesProps) => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Principais compradores:</Text>

      {topBuyers.length ? (
        <FlatList
          data={topBuyers}
          keyExtractor={item => item.productid}
          contentContainerStyle={s.list}
          renderItem={({ item }) => {
            return (
              <UseLastSalesItem
                description={item.productDescription}
                total={item.total.toString()}
                quantity={item.quantity.toString() || ''}
              />
            )
          }}
        />
      ) : (
        <View style={s.errorWrapper}>
          <IconAlertSquareRounded color={colors.zinc[700]} size={32} />
          <Text style={s.error}>Nenhum dado encontrado</Text>
        </View>
      )}
    </View>
  )
}

export type { UseLastSales }
