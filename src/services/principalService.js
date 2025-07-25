import axios from '../api/principals_axios';

export const getAllPrincipals = () => axios.get('');
export const createPrincipal = (principal) => axios.post('', principal);
