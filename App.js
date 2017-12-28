
import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import { BackAndroid } from 'react-native';
import { Provider } from 'react-redux';
import AutenticarOuInicial from './src/AutenticarOuInicial.js';
import reducers from './src/reducers';
import firebase from 'firebase';

export default class App extends Component<{}> {
    componentDidMount() {
      BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
    }
    componentWillUnmount() {
      BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton() {
        return true;
    }

    componentWillMount() {
      var config = {
      apiKey: "AIzaSyCtFm5OsGuykKqYord-h2szIgtNyGJLqVs",
      authDomain: "rnecommerce-2a468.firebaseapp.com",
      databaseURL: "https://rnecommerce-2a468.firebaseio.com",
      projectId: "rnecommerce-2a468",
      storageBucket: "rnecommerce-2a468.appspot.com",
      messagingSenderId: "880643937371"
      };
      try{
        if(!firebase.apps.lenght){
          firebase.initializeApp(config);
        }else{
          firebase.app()
        }
      }catch(err){}
    }


  render() {
    return (
        <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <AutenticarOuInicial />
        </Provider>

    );
  }
}

