import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getArticles() {
    return await api.get(host + '/data/wiki?sortBy=_createdOn%20desc');
}

export async function getArticleById(id) {
    return await api.get(host + `/data/wiki/${id}`);
}

export async function getMyArticles() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/wiki?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function createArticle(article) {
    return await api.post(host + '/data/wiki', article);
}

export async function editArticle(id, article) {
    return await api.put(host + `/data/wiki/${id}`, article);
}

export async function deleteArticle(id) {
    return await api.del(host + `/data/wiki/${id}`);
}

export async function searchCar(query) {
    return await api.get(host + `/data/cars?where=year%3D${query}`)
}