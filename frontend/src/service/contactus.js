import axios from "axios";

class ContactUsService {
    static instance;
    static getInstance() {
        if (ContactUsService.instance === undefined) {
            ContactUsService.instance = new ContactUsService();
        }
        return ContactUsService.instance;
    }

    async create(contactus) {
        const response = await axios.post('/api/contactus', contactus);
        if (response.data.success === false) {
            throw new Error(response.data.message);
        }
        if (response.data.data === undefined) {
            throw new Error('Data is undefined.');
        }
        return response.data.data;
    }

    async getAll() {
        const response = await axios.get('/api/contactus');
        if (response.data.success === false) {
            throw new Error(response.data.message);
        }
        if (response.data.data === undefined) {
            throw new Error('Data is undefined.');
        }
        return response.data.data;
    }

    async get(id) {
        const response = await axios.get(`/api/contactus/${id}`);
        if (response.data.success === false) {
            throw new Error(response.data.message);
        }
        if (response.data.data === undefined) {
            throw new Error('Data is undefined.');
        }
        return response.data.data;
    }

    async remove(id) {
        const response = await axios.delete(`/api/contactus/${id}`);
        if (response.data.success === false) {
            throw new Error(response.data.message);
        }
    }
}

export default ContactUsService;
