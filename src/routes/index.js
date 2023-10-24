// configurando a navegacao

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/welcome';
import signin from '../pages/signin';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="SignIn"
                    component={signin}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )

}
