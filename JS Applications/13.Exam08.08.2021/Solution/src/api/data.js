import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getBooks() {
    return await api.get(host + '/data/books?sortBy=_createdOn%20desc');
}

export async function getBooksById(id) {
    return await api.get(host + `/data/books/${id}`);
}

export async function getMyBooks() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function addBook(book) {
    return await api.post(host + '/data/books', book);
}

export async function editBook(id, book) {
    return await api.put(host + `/data/books/${id}`, book);
}

export async function deleteBook(id) {
    return await api.del(host + `/data/books/${id}`);
}