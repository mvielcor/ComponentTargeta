/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Linking,
  StatusBar,
} from 'react-native';

import {Header, Button, ThemeProvider} from 'react-native-elements';
import {Targeta} from './components/targeta/Targeta';
class App extends Component {
  render() {
    return (
      <>
        <View style={styles.contenedor}>
          <Header
            leftComponent={{icon: 'home', color: '#fff'}}
            centerComponent={{text: 'Anònim', style: {color: '#fff'}}}
            rightComponent={{icon: 'menu', color: '#fff'}}
            containerStyle={{
              backgroundColor: '#424040',
              justifyContent: 'space-around',
            }}
          />

          <Text
            style={{
              color: '#66bee1',
              marginLeft: 320,
              fontWeight: 'bold',
              fontSize: 16,
            }}
            onPress={() => Linking.openURL('https://reactnative.dev/docs/linking')}>
            Categorias
          </Text>
          <ScrollView>
            <View>
              <Text style={styles.titulo}>Directo</Text>
              <Targeta eLocal="Valencia CF" eVisitant="R.C.D.Espanyol" rLocal="3" rVisitant="1"></Targeta>
            </View>
            <View>
              <Text style={styles.titulo2}>Eventos Destacados</Text>
              <Targeta eLocal="Villareal CF" eVisitant="Llevant UE" rLocal="1" rVisitant="3"></Targeta>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#cbcac4',
  },
  eventos: {
    width: 350,
    height: 200,
    marginTop: 490,
    marginLeft: 25,
    backgroundColor: '#ebdb93',
    borderRadius: 30,
    position: 'absolute',
    flexDirection: 'row',
  },
  titulo: {
    marginTop: 10,
    marginLeft: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  titulo2: {
    marginTop: 10,
    marginLeft: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
