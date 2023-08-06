import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '37759432-0ba742801305b292d506a515b';

export default class SearchAPI {
    constructor() {
        this.name = '';
        this.page = 1;
        this.total = 0;
        this.images = [];
    }
    async serverData() {
        const serverDataURL = `${BASE_URL}?key=${API_KEY}&q=${this.name}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=12`;
        try {
            const server = await axios.get(serverDataURL);
            const data = await server.data;
            this.total = await data.totalHits;
            return data;
        } catch (error) {}
    }
}