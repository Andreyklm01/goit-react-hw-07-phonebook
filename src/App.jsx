import { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';

class App extends Component {
  // defaultNames = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ];

  // state = {
  //   contacts: this.defaultNames,
  //   filter: '',
  // };

  // componentDidMount() {
  //   if (!localStorage.getItem('contacts')) {
  //     return this.setState(() => ({
  //       contacts: this.defaultNames,
  //     }));
  //   }
  //   this.setState(() => ({
  //     contacts: JSON.parse(localStorage.getItem('contacts')),
  //   }));
  // }

  render() {
    return (
      <>
        <h1 className="main-title">Phonebook</h1>
        <ContactForm />
        <div>
          <h2 className="subtitle">Contacts</h2>
          <Filter />
          <ContactsList />
        </div>
      </>
    );
  }
}

export default App;
