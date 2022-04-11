import { Component } from 'react';
import SectionComponent from './Section/Section';
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
    filter: '',
  }

  addContact = ({ name, number }) => {
    // console.log("App: ", { name, number });
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => {
      if (
        contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ) {
        return alert(`${name} is already in contacts`);
      }
      return {
        contacts: [newContact, ...contacts],
      }
    })
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactId),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContactList = () => {
    const { filter, contacts } = this.state;
    const normilizedValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedValue))
  }

  render() {
    console.log(this.state.contacts.length);
    const { length } = this.state.contacts;
    const { filter } = this.state;
    return (
      <SectionComponent>

        <h1>Phonebook</h1>
        <ContactForm onSubmitProp={this.addContact} />

        <h2>Contact List</h2>
        <Filter value={filter}
          changeFilter={this.changeFilter} />
        {
          length > 0 ? (
            <ContactList
              contacts={this.filteredContactList()}
              onDeleteContact={this.deleteContact}
            />
          ) : (<Message message="Contact list is empty." />)
        }

      </SectionComponent >
    );
  }

};


export default App;