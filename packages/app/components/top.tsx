import * as S from '../features/home/style'
import { Platform } from 'react-native'
import topo from '../assets/topo.png'
import { H1, View } from 'dripsy'

const Top = () => {
  return (
    <>
      <S.Imge
        source={
          Platform.OS === 'ios' || Platform.OS === 'android'
            ? topo
            : {
                uri: topo.src,
              }
        }
      />
      <H1
        sx={{
          width: '100%',
          textAlign: 'center',
          color: '#fff',
          position: 'absolute',
          fontSize: 22,
          fontFamily: 'heading',
        }}
      >
        Detalhes da cesta
      </H1>

      <View
        sx={{
          paddingX: 3,
        }}
      ></View>
    </>
  )
}

export default Top
