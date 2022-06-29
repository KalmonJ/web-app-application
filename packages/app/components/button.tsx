import { Text, useSx } from 'dripsy'
import { TouchableOpacity } from 'react-native'

const Button = ({ children }) => {
  const sx = useSx()

  return (
    <TouchableOpacity
      style={sx({
        bg: '#2A9F85',
        mt: 16,
        paddingY: 16,
        borderRadius: 6,
      })}
    >
      <Text
        sx={{
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
