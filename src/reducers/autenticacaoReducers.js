import { Actions } from 'react-native-router-flux';

const INITIAL_STATE = {
	nome: '',
	email: '',
	senha: '',
	endereco: '',
	telefone: '',
	loadingLogin: false,
	loadingCadastro: false,
	valid_token: false,
	usuario_firebase: [],
	senha_alterar: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CADASTRO_EM_ANDAMENTO':
			return { ...state, loadingCadastro: true, email: '', senha: '', nome: '', endereco: '', telefone: '' };
		case 'CADASTRO_USUARIO_SUCESSO':
			return { ...state, loadingCadastro: false };
		case 'CADASTRO_USUARIO_ERRO':
			return { ...state, loadingCadastro: false };
		case 'MODIFICA_EMAIL':
			return { ...state, email: action.payload };
		case 'MODIFICA_SENHA':
			return { ...state, senha: action.payload };
		case 'MODIFICA_NOME':
			return { ...state, nome: action.payload };
		case 'MODIFICA_ENDERECO':
			return { ...state, endereco: action.payload };
		case 'MODIFICA_TELEFONE':
			return { ...state, telefone: action.payload };
		case 'LOGIN_EM_ANDAMENTO':
			return { ...state, loadingLogin: true, email: '', senha: '' };
		case 'LOGIN_USUARIO_ERRO':
			return { ...state, loadingLogin: false };
        case 'SET_USUARIO_FIREBASE':
            return { ...state, usuario_firebase: action.payload };
        case 'ALTERA_SENHA_CONCLUIDO':
        	return { ...state, senha: ''}
        case 'EMAIL_VERIFICACAO':
        	return { ...state, email: ''}
        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, valid_token: true };
            } else {
                return { ...state, valid_token: false, usuario_firebase: null };
            }

		default:
			return state;
	}
};
