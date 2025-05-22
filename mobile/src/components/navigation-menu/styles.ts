import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

export const s = StyleSheet.create({
  container: {
  padding: 16,
  borderRadius: 8,  
  },
  list: {
  justifyContent: 'center',
  gap: 16, // Espaçamento entre os itens
  },
  title: {
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
  },
  buttonWrapper: {
  flex: 1 / 3, // Distribui igualmente em 3 colunas
  alignItems: 'center',
  padding: 8,
  },
  button: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: colors.blue[600],
    boxShadow: [
      {
        color: colors.zinc[400],
        offsetX: 0,
        offsetY: 2,
        spreadDistance: 0,
        blurRadius: 5,
      },
    ],
  },
  label: {
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
    lineHeight: 16,
    color: colors.zinc[800],
  },
})
