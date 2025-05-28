import { Poppins_500Medium } from '@expo-google-fonts/poppins'
import { DashPathEffect, useFont } from '@shopify/react-native-skia'
import { IconAlertSquareRounded } from '@tabler/icons-react-native'
import { Text, View } from 'react-native'
import { CartesianChart, Line } from 'victory-native'
import { colors } from '@/constants/theme'
import { s } from './styles'

interface UsePurchasePerMonthProps {
  purchaseData:
    | {
        x: string
        y: number
        z: number
      }[]
    | undefined
}

function UsePurchasePerMonth({ purchaseData }: UsePurchasePerMonthProps) {
  const font = useFont(Poppins_500Medium)

  return (
    <View style={s.container}>
      <View style={s.chartContainer}>
        <Text style={s.title}>Variação de preço:</Text>

        <View style={s.card}>
          {purchaseData?.length ? (
            <View style={s.chart}>
              <CartesianChart
                data={purchaseData}
                xKey="x"
                yKeys={['y']}
                domainPadding={32}
                xAxis={{ font }}
                yAxis={[
                  {
                    font,
                    lineColor: colors.zinc[500],
                    linePathEffect: <DashPathEffect intervals={[8, 6]} />,
                  },
                ]}
              >
                {({ points }) => (
                  <Line
                    points={points.y}
                    curveType="bumpX"
                    color={colors.blue[600]}
                    strokeWidth={3}
                  />
                )}
              </CartesianChart>
            </View>
          ) : (
            <View style={s.errorWrapper}>
              <IconAlertSquareRounded color={colors.zinc[700]} size={32} />
              <Text style={s.error}>Nenhum dado encontrado</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export { UsePurchasePerMonth }
