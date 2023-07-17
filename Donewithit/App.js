import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import Boiler from './Boiler';
import Pump from './Pump';
import Chiler from './Chiler';
import Airhandling from './Airhandling';
import CoolingTower from './CoolingTower';
import Thermal from './Thermal'
import Coal from './Coal';
import Eco from './Eco';
import Turbine from './Turbine';
import Condenser from './Condenser';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Boiler"
          component={Boiler}
          options={{ title: 'Boiler' }}
        />
        <Stack.Screen
          name="Pump"
          component={Pump}
          options={{ title: 'Pump' }}
        />
        <Stack.Screen
          name="Chiler"
          component={Chiler}
          options={{ title: 'Chiler' }}
        />
        <Stack.Screen
          name="Airhandling"
          component={Airhandling}
          options={{ title: 'Airhandling' }}
        />
        <Stack.Screen
          name="CoolingTower"
          component={CoolingTower}
          options={{ title: 'CoolingTower' }}
        />
        <Stack.Screen
          name="Thermal"
          component={Thermal}
          options={{ title: 'Thermal' }}
        />
        <Stack.Screen
          name="Coal"
          component={Coal}
          options={{ title: 'Coal' }}
        />
        <Stack.Screen
          name="Economiser and Air Pre-heater"
          component={Eco}
          options={{ title: 'Economiser and Air Pre-heater' }}
        />
        <Stack.Screen
          name="Turbine"
          component={Turbine}
          options={{ title: 'Turbine' }}
        />
        <Stack.Screen
          name="Condenser"
          component={Condenser}
          options={{ title: 'Condenser' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const handleButtonPress = (systemName) => {
    if (systemName === 'Boiler') {
      navigation.navigate('Boiler');
    } else if (systemName === 'Pump') {
      navigation.navigate('Pump');
    } else if (systemName === 'Chiler') {
      navigation.navigate('Chiler');
    } else if (systemName === 'Airhandling') {
      navigation.navigate('Airhandling');
    } else if (systemName === 'CoolingTower') {
      navigation.navigate('CoolingTower');
    }
    else if (systemName === 'Thermal') {
      navigation.navigate('Thermal');
    }
    else if (systemName === 'Coal') {
      navigation.navigate('Coal');
    }
    else if (systemName === 'Economiser and Air Pre-heater') {
      navigation.navigate('Economiser and Air Pre-heater');
    } 
    else if (systemName === 'Turbine') {
      navigation.navigate('Turbine');
    }
    else if (systemName === 'Condenser') {
      navigation.navigate('Condenser');
    }else {
      Alert.alert(`Selected ${systemName}`);
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View style={styles.buttonContainer} animation="fadeInUp" duration={1000} delay={200}>
        <Button
          title="Boiler"
          onPress={() => handleButtonPress('Boiler')}
          color="#808080"
        />
      </Animatable.View>
      <Animatable.View style={styles.buttonContainer} animation="fadeInUp" duration={1000} delay={400}>
        <Button
          title="Pump"
          onPress={() => handleButtonPress('Pump')}
          color="#808080"
        />
      </Animatable.View>
      <Animatable.View style={styles.buttonContainer} animation="fadeInUp" duration={1000} delay={400}>
        <Button
          title="Chiler"
          onPress={() => handleButtonPress('Chiler')}
          color="#808080"
        />
      </Animatable.View>
      <Animatable.View style={styles.buttonContainer} animation="fadeInUp" duration={1000} delay={400}>
        <Button
          title="Cooling Tower"
          onPress={() => handleButtonPress('CoolingTower')}
          color="#808080"
        />
      </Animatable.View>
      <Animatable.View style={styles.buttonContainer} animation="fadeInUp" duration={1000} delay={400}>
        <Button
          title="Air handling"
          onPress={() => handleButtonPress('Airhandling')}
          color="#808080"
        />
      </Animatable.View>
      <Animatable.View style={styles.buttonContainer} animation="fadeInUp" duration={1000} delay={400}>
        <Button
          title="Thermal"
          onPress={() => handleButtonPress('Thermal')}
          color="#808080"
        />
      </Animatable.View>
      <Animatable.View style={styles.buttonContainer} animation="fadeInUp" duration={1000} delay={400}>
        <Button
          title="Coal"
          onPress={() => handleButtonPress('Coal')}
          color="#808080"
        />
      </Animatable.View>
      <Animatable.View style={styles.buttonContainer} animation="fadeInUp" duration={1000} delay={400}>
        <Button
          title="Economiser and Air Pre-heater"
          onPress={() => handleButtonPress('Economiser and Air Pre-heater')}
          color="#808080"
        />
      </Animatable.View>
      <Animatable.View style={styles.buttonContainer} animation="fadeInUp" duration={1000} delay={400}>
        <Button
          title="Turbine"
          onPress={() => handleButtonPress('Turbine')}
          color="#808080"
        />
      </Animatable.View>
      <Animatable.View style={styles.buttonContainer} animation="fadeInUp" duration={1000} delay={400}>
        <Button
          title="Conderser"
          onPress={() => handleButtonPress('Conderser')}
          color="#808080"
        />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00FF00', // Green background color
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  animatedButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default App;
