// Essa funçao exporta uma instância de "axios" pré-configurada para fazer requisições em 'http://localhost:3000'

import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000'
});