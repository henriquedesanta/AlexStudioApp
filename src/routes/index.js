import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../../components/Login/Login'
import HomeScreen from '../../components/Home/Home';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}