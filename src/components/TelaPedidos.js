import React, { Component } from 'react';
import { Text, View, TouchableHighlight, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import { Actions } from 'react-native-router-flux';

const sanduiche = require('../imgs/sanduiches.jpg');
const pizza = require('../imgs/pizzas.jpg');
const petisco = require('../imgs/petiscos.jpg');
const bebida = require('../imgs/bebidas.jpg');
const sobremesa = require('../imgs/sobremesas.jpg');

export default class TelaPedidos extends Component {
	constructor(props) {
		super(props);
		const lista = [
			{key: 0, title: 'Sanduiches', img: sanduiche},
			{key: 1, title: 'Pizzas', img: pizza },
			{key: 2, title: 'Petiscos', img: petisco },
			{key: 3, title: 'Bebidas', img: bebida },
			{key: 4, title: 'Sobremesas', img: sobremesa }

		]
		this.state = { lista: lista }
	}

	renderRow = (item) => {
		return(
			<TouchableHighlight onPress = {() => Actions.telaingredientes({ title: item.title, tipo: item.title })} underlayColor = 'transparent'>

				<View style = {{ flex: 1, borderBottomWidth: 1, borderColor: '#CCC', marginHorizontal: 7, marginVertical: 5, flexDirection: 'row', backgroundColor: 'snow' }}>
					<View style = {{ margin: 10, alignItems: 'center', justifyContent: 'center' }}>
						<Image source = {item.img} style = {{ width: 150, height: 80, borderRadius: 10 }}/>
					</View>

					<View style = {{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
						<Text style = {{ fontSize: 16, fontWeight: 'bold', color: 'grey' }}> {item.title} </Text>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
	render() {

		return(
			<View style = {{ backgroundColor: '#F4F6F6', flex: 8.5 }}>
				<FlatList
					extraData = {this.state.lista}
					data = {this.state.lista}
					renderItem = {({item}) => this.renderRow(item)}

				/>
			</View>

		)
	}
}
