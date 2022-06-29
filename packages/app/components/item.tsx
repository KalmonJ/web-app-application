import { Text, Image, View, useSx } from 'dripsy'
import { Platform } from 'react-native'

const Item = ({ name, image }: { name: string; image: StaticImageData }) => {
  const sx = useSx()
  return (
    <View
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        mt: 3,
        paddingY: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
      }}
    >
      <Image
        style={sx({
          width: 60,
          height: 60,
        })}
        source={
          Platform.OS === 'ios' || Platform.OS === 'android'
            ? image
            : { uri: image.src }
        }
        accessibilityLabel="fruits images"
      />
      <Text
        sx={{
          lineHeight: 26,
          marginLeft: 11,
          color: '#464646',
        }}
      >
        {name}
      </Text>
    </View>
  )
}

export default Item
