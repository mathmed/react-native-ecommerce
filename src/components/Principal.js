import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import firebase from 'firebase';
import b64 from 'base-64';
import Header from './Header.js';
import TelaPedidos from './TelaPedidos.js'

class Principal extends Component {

	render() {
		return (
			<View style = {{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
				<StatusBar backgroundColor = '#FFA07A' />
				<Header />
				<TelaPedidos />
				<View style = {{ backgroundColor: 'snow', borderWidth: 2, borderColor: 'snow', borderTopColor: '#FFA07A', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', padding: 5, flex: 0.6}}>
					<View style = {{ justifyContent: 'center', alignItems: 'center' }}>
						<TouchableHighlight underlayColor = 'transparent' onPress = {() => alert('eae')} >
							<Icon  name = 'history' size = {20} color = '#FFA07A' />
						</TouchableHighlight>
						<Text style = {{ fontSize: 10 }}> Histórico </Text>

					</View>

					<View style = {{ justifyContent: 'center', alignItems: 'center' }}>
						<TouchableHighlight underlayColor = 'transparent' onPress = {() =>alert('eae')} >
								<Icon name = 'restaurant' size = {20} color = '#FFA07A' />
						</TouchableHighlight>
						<Text style = {{ fontSize: 10 }}> Pedido </Text>

					</View>

					<View style = {{ justifyContent: 'center', alignItems: 'center'  }}>
						<TouchableHighlight underlayColor = 'transparent' onPress = {() => alert('eae')} >
							<Icon name = 'favorite' size = {20} color = '#FFA07A'  />
						</TouchableHighlight>
						<Text style = {{ fontSize: 10 }}> Favoritos </Text>

					</View>

					<View style = {{ justifyContent: 'center', alignItems: 'center'  }}>
						<TouchableHighlight underlayColor = 'transparent' onPress = {() => alert('eae')} >
							<Icon name = 'shopping-cart' size = {20} color = '#FFA07A' /> 
						</TouchableHighlight>
						<Text style = {{ fontSize: 10 }}> Carrinho </Text>


					</View>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => (
    {}
);

export default connect(mapStateToProps, { })(Principal);