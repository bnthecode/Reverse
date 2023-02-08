import * as React from 'react';
import {Button, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './containers/Profile';
import Home from './containers/Home';
const Stack = createNativeStackNavigator();


const HomeScreen = (navigation:any) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigation.navigate('Profile', {name: 'Jane'})
      }
    />
  );
};
const ProfileScreen = (data:any) => {
  return <Text>This is {data.route.params.name}'s profile</Text>;
};
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Profile}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;