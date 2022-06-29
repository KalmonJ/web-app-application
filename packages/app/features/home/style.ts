import { styled } from 'dripsy'
import { Dimensions, Image } from 'react-native'
const width = Dimensions.get('screen').width

export const Imge = styled(Image)({
  width: '100%',
  height: (578 / 768) * width,
})

export const Logo = styled(Image)({
  width: 30,
  height: 30,
})
