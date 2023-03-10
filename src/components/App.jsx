import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const normalizationName = name.toLowerCase();

    const atContactList = this.state.contacts.find(
      ({ name }) => name.toLocaleLowerCase() === normalizationName
    );
    if (atContactList) {
      alert(`${name} is already in contacts.`);
      return;
    }

    if (atContactList) {
      return;
    }

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedCase)
    );
  };

  deleteContactItem = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== itemId),
    }));
  };

  render() {
    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        {this.state.contacts.length > 0 && (
          <div>
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <ContactList
              contacts={this.filteredContacts()}
              onDelete={this.deleteContactItem}
            />
          </div>
        )}
      </div>
    );
  }
}
