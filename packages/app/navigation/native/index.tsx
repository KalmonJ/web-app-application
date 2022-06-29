import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from 'app/features/details/details'
import { HomeScreen } from 'app/features/home/screen'

export const NativeNavigation = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  )
}
