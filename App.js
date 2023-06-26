import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigations/StackNavigator';
import { AuthProvider } from './hooks/AuthProvider';
import 'expo-dev-client'

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </AuthProvider>
  )
}

