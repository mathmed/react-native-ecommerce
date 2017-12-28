import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight, ActivityIndicator, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Accordion from 'react-native-collapsible/Accordion';
import { modificaDadosCadastroElogin, autenticar } from '../actions/autenticacaoActions.js';


class Login extends Component {
	_renderizarBotao() {
        if (this.props.loadingLogin) {
			return (<ActivityIndicator size = 'large' color = '#FFA07A' />);
		}

		return (
				<TouchableHighlight onPress = {() => this._login()} underlayColor = 'transparent'>
					<View style = {{ backgroundColor: '#FFA07A', alignItems: 'center', justifyContent: 'center', height: 35, width: 170, borderRadius: 15 }}>
							<Text style = {{ fontSize: 20, color: 'snow', fontWeight: 'bold' }}> Login </Text>
					</View>
				</TouchableHighlight>	


		);
	}
	_login() {
		const email = this.props.email;
		const senha = this.props.senha;
		this.props.autenticar({ email, senha });
	}

	render() {
		return (
				<View style = {{ backgroundColor: 'snow', flex: 1 }}>
					<StatusBar backgroundColor = '#FFA07A' />

					<View style = {{ alignItems: 'center', justifyContent: 'center', marginTop: 40, flex: 0.5, marginBottom: 40}}>
						<Text style = {{ color: '#FFA07A', fontSize: 28, fontWeight: 'bold' }}>e-Commerce</Text>
					</View>

					<View style = {{ flex: 2, padding: 20, margin: 10 }}>
						<TextInput  placeholder = 'E-mail' underlineColorAndroid = '#FFA07A' value = {this.props.email} onChangeText = {texto => {this.props.modificaDadosCadastroElogin(texto, 1)}} />
						<TextInput  placeholder = 'Senha' underlineColorAndroid = '#FFA07A' secureTextEntry value = {this.props.senha} onChangeText = {texto => {this.props.modificaDadosCadastroElogin(texto, 2)}} />

					</View>

					


					<View  style = {{ justifyContent: 'center', flex: 2, alignItems: 'center' }}>
						{this._renderizarBotao()}
					</View>






					<View style = {{ backgroundColor: '#FFA07A', flex: 0.8, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
							<TouchableHighlight onPress = {() => Actions.cadastro()} underlayColor = 'transparent'>
								<Text style = {{ fontSize: 14, color: 'snow', fontWeight: 'bold' }}> Cadastre-se! </Text>
							</TouchableHighlight>

							<TouchableHighlight onPress = {() => Actions.recuperacao()} underlayColor = 'transparent'>
								<Text style = {{ fontSize: 14, color: 'snow', fontWeight: 'bold' }}> Esqueci minha senha </Text>
							</TouchableHighlight>
					</View>
			
				</View>

		);
	}
}


const mapStateToProps = state => (
    {
    	email: state.autenticacaoReducers.email,
    	senha: state.autenticacaoReducers.senha,
    	loadingLogin: state.autenticacaoReducers.loadingLogin
    }
);


export default connect (mapStateToProps, { modificaDadosCadastroElogin, autenticar })(Login);
