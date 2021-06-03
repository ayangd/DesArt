import axios from "axios";

class ArticleService {
    static instance;
    static getInstance() {
        if (ArticleService.instance === undefined) {
            ArticleService.instance = new ArticleService();
        }
        return ArticleService.instance;
    }

    async create(article) {
        const response = await axios.post('/api/article', article);
        if (response.data.success === false) {
            throw new Error(response.data.message);
        }
        if (response.data.data === undefined) {
            throw new Error('Data is undefined.');
        }
        return response.data.data;
    }

    async getAll() {
        const response = await axios.get('/api/article');
        if (response.data.success === false) {
            throw new Error(response.data.message);
        }
        if (response.data.data === undefined) {
            throw new Error('Data is undefined.');
        }
        return response.data.data;
    }

    async get(id) {
        const response = await axios.get(`/api/article/${id}`);
        if (response.data.success === false) {
            throw new Error(response.data.message);
        }
        if (response.data.data === undefined) {
            throw new Error('Data is undefined.');
        }
        return response.data.data;
    }

    async update(article) {
        const response = await axios.put(`/api/article/${article.id}`, article);
        if (response.data.success === false) {
            throw new Error(response.data.message);
        }
    }

    async remove(id) {
        const response = await axios.delete(`/api/article/${id}`);
        if (response.data.success === false) {
            throw new Error(response.data.message);
        }
    }
}

export default ArticleService;
