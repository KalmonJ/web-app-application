import { Text, useSx, View, H1, P, Row, A, H2 } from 'dripsy'
import { Platform } from 'react-native'
import logo from 'app/assets/logo.png'
import * as S from '../features/home/style'
import Button from './button'
import { TextLink } from 'solito/link'

const Details = () => {
  return (
    <>
      <View
        sx={{
          paddingX: 2,
        }}
      >
        <H2
          sx={(themes) => ({
            color: '#464646',
            fontSize: 22,
            fontFamily: 'heading',
          })}
        >
          Cesta de Verduras
        </H2>

        <View
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <S.Logo
            source={
              Platform.OS === 'ios' || Platform.OS === 'android'
                ? logo
                : {
                    uri: logo.src,
                  }
            }
          />

          <P
            sx={(themes) => ({
              fontSize: 16,
              marginLeft: 2,
            })}
          >
            Jenny Jack Farm
          </P>
        </View>
        <Text
          sx={{
            color: '#A3A3A3',
            lineHeight: 20,
            fontFamily: 'MontserratRegular',
          }}
        >
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para a sua cozinha
        </Text>
        <Text
          sx={{
            color: '#2A9F85',
            fontWeight: 'bold',
            fontSize: 26,
            lineHeight: 42,
            marginTop: 2,
          }}
        >
          R$ 40,00
        </Text>
        <Button>Comprar</Button>
        <TextLink href={'/details'}>details</TextLink>
      </View>
    </>
  )
}

export default Details
