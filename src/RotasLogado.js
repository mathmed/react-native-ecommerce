import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './components/Login.js';
import Cadastro from './components/Cadastro.js';
import Recuperacao from './components/Recuperacao.js';
import Principal from './components/Principal.js';
import TelaIngredientes from './components/TelaIngredientes.js';

export default class RotasDeslogado extends Component {
	render() {
		return (
			<Router navigationBarStyle={{ backgroundColor: '#fff' }} titleStyle={{ color: '#ff5400' }}>
				<Scene key = 'root'>
					<Scene key = 'login' component = {Login} hideNavBar />
					<Scene key = 'cadastro' component = {Cadastro} title="Cadastro" titleStyle = {{color: 'snow', backgroundColor: '#FFA07A'}} hideNavBar = {false} navigationBarStyle={{backgroundColor: '#FFA07A'}}/> 
					<Scene key = 'telaingredientes' component = {TelaIngredientes}  titleStyle = {{color: 'snow', backgroundColor: '#FFA07A', fontSize: 16}} hideNavBar = {false} navigationBarStyle={{backgroundColor: '#FFA07A', height: 40 }}/> 
					<Scene key = 'recuperacao' component = {Recuperacao} title="Recuperação" titleStyle = {{color: 'snow', backgroundColor: '#FFA07A'}} hideNavBar = {false} navigationBarStyle={{backgroundColor: '#FFA07A'}}/> 
					<Scene key = 'principal' component = {Principal} hideNavBar initial  />

				</Scene>
			</Router>


			);
	}
}