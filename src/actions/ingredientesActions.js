import firebase from 'firebase';


export const listarIngredientes = (tipo) => {
	return dispatch => {
		switch(tipo) {
			case 'Sanduiches':
				firebase.database().ref('lanches/' + tipo.toLowerCase()).once('value', snapshot => {
					const info = snapshot.val()
					dispatch({ type: 'LISTAS', payload: info })
				})
		}
	}
}