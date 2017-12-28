import firebase from 'firebase';
import b64 from 'base-64';
import { Alert } from 'react-native';
import { Actions} from 'react-native-router-flux';

export const modificaDadosCadastroElogin = (texto, dado) => {
	switch (dado) {
		case 1:
			return {
				type: 'MODIFICA_EMAIL',
				payload: texto
			};
		case 2:
			return {
				type: 'MODIFICA_SENHA',
				payload: texto
			};
		case 3:
			return {
				type: 'MODIFICA_NOME',
				payload: texto
			};
		case 4:
			return {
				type: 'MODIFICA_ENDERECO',
				payload: texto
			};
		case 5:
			return {
				type: 'MODIFICA_TELEFONE',
				payload: texto
			};

		default:
			return 0;
	}
};

export const cadastraUsuario = ({ nome, email, senha, endereco, telefone }) => {
	const emailCriar = email.toLowerCase();
	return dispatch => {
		dispatch({ type: 'CADASTRO_EM_ANDAMENTO' });
			if (nome.length >= 4 && endereco.length >= 8 && telefone.length >= 8 ) {
				firebase.auth().createUserWithEmailAndPassword(emailCriar, senha)
					.then(user => {
						const emailB64 = b64.encode(emailCriar);
						firebase.database().ref('clientes/' + emailB64).set({ nome, emailCriar, endereco, telefone })
							.then(value => cadastroUsuarioSucesso(dispatch));
					})
					.catch(erro => cadastroUsuarioErro(erro, dispatch));
			} else {
				Alert.alert('Erro', 'Preencha todos os campos com informações válidas.');

				cadastroUsuarioErro(1, dispatch);
			}
		};
};

export const cadastroUsuarioSucesso = (dispatch) => {
	Actions.principal();
	dispatch({ type: 'CADASTRO_USUARIO_SUCESSO' });
};

export const cadastroUsuarioErro = (erro, dispatch) => {
	if (erro !== 1) {
		Alert.alert('Erro', 'Não foi possível realizar o cadastro');
	}
	dispatch({ type: 'CADASTRO_USUARIO_ERRO', payload: erro.message });
};

export const enviaConfirmacao = (email) =>{
	var auth = firebase.auth();
	auth.sendPasswordResetEmail(email).then(function() {
	  // Email sent.
	}).catch(function(error) {
	  // An error happened.
	});
	return{type: 'EMAIL_VERIFICACAO', payload: ''}
}

export const autenticar = ({ email, senha }) => {
	const emailCriar = email.toLowerCase();
	return dispatch => {
		dispatch({ type: 'LOGIN_EM_ANDAMENTO' });
		firebase.auth().signInWithEmailAndPassword(emailCriar, senha)
			.then(value => aposAutenticar(dispatch))
		.catch(erro => loginUsuarioErro(erro, dispatch));
	};
};

const aposAutenticar = (dispatch) => {
		const email = firebase.auth().currentUser.email;
		const emailB64 = b64.encode(email.toLowerCase());
			firebase.database().ref('clientes/' + emailB64).once('value', (snapshot) => {
				const info = snapshot.val();
				Actions.principal();
				dispatch({ type: 'LOGIN_USUARIO_SUCESSO', payload: info });
		});
};

const loginUsuarioErro = (erro, dispatch) => {
	Alert.alert('Erro', 'Não foi possível realizar o login');
	dispatch({ type: 'LOGIN_USUARIO_ERRO', payload: erro.message });
};

export const validateToken = () => { 
    return dispatch => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch({ type: 'SET_USUARIO_FIREBASE', payload: user });
                dispatch({ type: 'TOKEN_VALIDATED', payload: true });
            } else {
                dispatch({ type: 'TOKEN_VALIDATED', payload: false });
            }
        });
    };
};