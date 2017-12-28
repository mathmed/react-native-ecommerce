import React, { Component } from 'react';
import { Text, View, TouchableHighlight, FlatList, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import Accordion from 'react-native-collapsible/Accordion';
import firebase from 'firebase';
import { listarIngredientes } from '../actions/ingredientesActions.js';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';

class TelaIngredientes extends Component {
	constructor(props) {
		super(props);
		this.state = { carrinho: 0 };
	}
	componentWillMount() {
		this.props.listarIngredientes(this.props.tipo)
	}
	_renderHeader = (item) => {
		return(
				<View style = {{ borderRadius: 10, flex: 1, borderBottomWidth: 1, borderColor: '#CCC', marginHorizontal: 7, marginVertical: 5, flexDirection: 'row', backgroundColor: 'snow' }}>
					<View style = {{ margin: 10, alignItems: 'center', justifyContent: 'center' }}>
						<Image source = {{ uri: item.url }} style = {{ width: 150, height: 80, borderRadius: 10 }}/>
					</View>

					<View style = {{ alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row' }}>
						<Text style = {{ fontSize: 16, fontWeight: 'bold', color: 'grey' }}> {item.nome} </Text>
						<Icon name = 'expand-more' size = {40} color = { 'green' } />
					</View>
				</View>

		)
	}

	_renderContent = (item) => {
		return(
			<View style = {{ backgroundColor: '#CD5C5C', flex: 1, borderRadius: 10, margin: 2 }}>
				<View style = {{ backgroundColor: '#CD5C5C', justifyContent: 'center', alignItems: 'center', marginTop: 10, marginLeft: 7, marginRight: 7 }}>
					<Text style = {{ fontSize: 12, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', color: 'snow' }}> {item.descricao} </Text>
				</View>
				<View style = {{ backgroundColor: 'snow', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15, marginBottom: 10, marginHorizontal: 80, borderRadius: 15 }}>
					<Text style = {{ fontSize: 14, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', color: 'grey' }}>Por apenas R$ {item.preco} </Text>
				</View>
				<View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 5 }}>
					<TouchableHighlight>
						<Icon name = 'add-shopping-cart' size = {30} color = { 'snow' } />
					</TouchableHighlight>
					<Icon name = 'remove-shopping-cart' size = {30} color = { 'snow' } />
				</View>
				<View style = {{ padding: 50, backgroundColor: '#CD5C5C', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
					<Text style = {{ fontSize: 14, fontWeight: 'bold', color: 'snow' }}>{this.state.carrinho} {item.nome}'s em seu carrinho </Text>
				</View>

			</View>
		)

	}
	render() {

		return(
			<ScrollView style = {{ backgroundColor: '#F4F6F6' }}>
			<View style = {{ backgroundColor: '#F4F6F6', flex: 8.5 }}>
				<Accordion
					sections={this.props.lista}
					renderHeader={this._renderHeader}
					renderContent={this._renderContent}
					underlayColor = {'transparent'}
				/>
			</View>
			</ScrollView>

		)
	}
}


const mapStateToProps = state => {
	const lista = _.map(state.ingredientesReducers, (val, uid) => {
		return { ...val, uid };
	});

	return { lista };
};

export default connect (mapStateToProps, {	listarIngredientes	})(TelaIngredientes);
