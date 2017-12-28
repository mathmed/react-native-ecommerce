import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class Header extends Component {
	render() {
		return (
			<View style={{ backgroundColor: '#FFA07A', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 5, flex: 0.6 }}>
				<TouchableHighlight underlayColor='transparent' onPress={() => alert('eE')} >
					<Icon name='menu' size={25} color='snow' />
				</TouchableHighlight>

				<Text style = {{ fontSize: 16, fontWeight: 'bold', color: 'snow' }}> e-Commerce </Text>


			</View>


		);
	}
}
const mapStateToProps = state => (
    {}
);

export default connect(mapStateToProps, { })(Header);
