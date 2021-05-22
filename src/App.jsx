import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';

const App = () => (
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

export default App;
