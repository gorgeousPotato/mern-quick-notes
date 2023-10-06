import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addNote(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData);
}

export function deleteNote(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function edit(id) {
  return sendRequest(`${BASE_URL}/${id}/edit`);
}

export function update(id, updatedPost) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', updatedPost)
}