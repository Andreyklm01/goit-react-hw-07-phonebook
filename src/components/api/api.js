import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

const addToContacts = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

const deleteFromContacts = id => {
  return axios.delete(`/contacts/{id}`);
};

export { fetchContacts, addToContacts, deleteFromContacts };
