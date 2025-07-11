import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/constants/theme'

export const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 12,
    backgroundColor: colors.white,
    borderRadius: 16,
    boxShadow: [
      {
        color: colors.zinc[300],
        offsetX: 0,
        offsetY: 6,
        spreadDistance: 1,
        blurRadius: 10,
      },
    ],
  },
  icon: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.blue[600],
  },
  infos: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  customer: {
    flex: 1,
    fontSize: 16,
    fontFamily: fontFamily.medium,
    lineHeight: 20,
  },
  probabilityWrapper: {
    paddingLeft: 8,
    minWidth: 120,
    gap: 2,
  },
  probabilityTitle: {
    fontSize: 12,
    fontFamily: fontFamily.semiBold,
    color: colors.zinc[800],
  },
  probabilityValue: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
  },
})
