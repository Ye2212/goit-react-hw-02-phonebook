import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Message from './Message/Message';


class App extends Component {

  state = {
    contacts: [],
  }

  render(){
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
  
        <h2>Contact List</h2>
        <ContactList />
        <Filter />
        <Message />
      </div>
    );
  }

};


export default App;