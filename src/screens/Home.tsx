import React from 'react';
import { Button, Text, View} from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';



  export function HomeScreen() {
  const { logout } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo à Home!</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>R$1500,00</Text>
      <Text></Text>
      <Text></Text>
      <Button title="Sair" onPress={logout} />
      <Text></Text>
      <Text></Text>
  
    </View>
  );
};
export default HomeScreen;