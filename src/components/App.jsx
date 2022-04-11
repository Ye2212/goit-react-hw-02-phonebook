import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Message from './Message/Message';
import { nanoid } from 'nanoid';


class App extends Component {

  state = {
    contacts: [{ id: 'id-2', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-3', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-4', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-5', name: 'Annie Copeland', number: '227-91-26' },],
  }

  addContact = ({ name, number }) => {
    console.log("App: ", { name, number });
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }))
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitProp={this.addContact} />

        <h2>Contact List</h2>
        <ContactList
          contacts={this.state.contacts} />
        <Filter />
        <Message message="Contact list is empty." />
      </div >
    );
  }

};


export default App;