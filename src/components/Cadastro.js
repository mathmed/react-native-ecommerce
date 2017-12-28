import React, { Component } from 'react';
import { Text, View, TextInput, TouchableHighlight, ActivityIndicator, StatusBar, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Accordion from 'react-native-collapsible/Accordion';
import { modificaDadosCadastroElogin, cadastraUsuario } from '../actions/autenticacaoActions.js';

class Cadastro extends Component {
	_renderizarBotao() {
	    if (this.props.loadingCadastro) {
			return (<ActivityIndicator size = 'large' color = '#FFA07A' />);
		}

		return (
				<TouchableHighlight onPress = {() => this._cadastrar()} underlayColor = 'transparent'>
					<View style = {{ backgroundColor: '#FFA07A', alignItems: 'center', justifyContent: 'center', height: 35, width: 170, borderRadius: 15 }}>
							<Text style = {{ fontSize: 20, color: 'snow', fontWeight: 'bold' }}> Cadastrar </Text>
					</View>
				</TouchableHighlight>	


		);
	}
	_cadastrar() {
		const { nome, email, senha, endereco, telefone } = this.props;
		this.props.cadastraUsuario({ nome, email, senha, endereco, telefone });
	}


	render() {
		return (
			<ScrollView style = {{ backgroundColor: 'snow' }}>
				<View style = {{ backgroundColor: 'snow', flex: 1 }}>
					<StatusBar backgroundColor = '#FFA07A' />

					<View style = {{ flex: 2, padding: 20, margin: 10 }}>
						<TextInput  placeholder = 'E-mail' underlineColorAndroid = '#FFA07A'  value = {this.props.email} onChangeText = {texto => {this.props.modificaDadosCadastroElogin(texto, 1)}}/>
						<TextInput  placeholder = 'Senha' underlineColorAndroid = '#FFA07A' secureTextEntry value = {this.props.senha} onChangeText = {texto => {this.props.modificaDadosCadastroElogin(texto, 2)}} />
						<TextInput  placeholder = 'Nome' underlineColorAndroid = '#FFA07A' value = {this.props.nome} onChangeText = {texto => {this.props.modificaDadosCadastroElogin(texto, 3)}}/>
						<TextInput  placeholder = 'Endereço completo' underlineColorAndroid = '#FFA07A' value = {this.props.endereco} onChangeText = {texto => {this.props.modificaDadosCadastroElogin(texto, 4)}} />
						<TextInput  placeholder = 'Telefone' underlineColorAndroid = '#FFA07A' keyboardType = 'phone-pad' value = {this.props.telefone} onChangeText = {texto => {this.props.modificaDadosCadastroElogin(texto, 5)}} />

					</View>

					


					<View  style = {{ justifyContent: 'center', flex: 2, alignItems: 'center' }}>
						{this._renderizarBotao()}
					</View>

				</View>
			</ScrollView>

		);
	}
}


const mapStateToProps = state => (
    {
    	email: state.autenticacaoReducers.email,
    	senha: state.autenticacaoReducers.senha,
    	nome: state.autenticacaoReducers.nome,
    	endereco: state.autenticacaoReducers.endereco,
    	telefone: state.autenticacaoReducers.telefone,
    	loadingCadastro: state.autenticacaoReducers.loadingCadastro
    }
);


export default connect (mapStateToProps, { modificaDadosCadastroElogin, cadastraUsuario })(Cadastro);
