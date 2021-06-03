import axios from 'axios';

class LoginService {
    static instance;
    static getInstance() {
        if (LoginService.instance === undefined) {
            LoginService.instance = new LoginService();
        }
        return LoginService.instance;
    }

    /**
     * @param {string} username
     * @param {string} password
     */
    async login(username, password) {
        const response = await axios.post('/api/auth/login', {username, password});
        if (response.data.success === false) {
            throw new Error(response.data.message);
        }
    }

    async logout() {
        const response = await axios.post('/api/auth/logout');
        if (response.data.success === false) {
            throw new Error(response.data.message);
        }
    }

    /**
     * @returns {Promise<boolean>} isLoggedIn
     */
    async checkUser() {
        const response = await axios.get('/api/auth/checkUser');
        return response.data.data;
    }
}

export default LoginService;