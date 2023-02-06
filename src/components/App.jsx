import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  handleSubmit = (evt) => {
    this.setState(state => ({
      contacts: state.contacts
  }))
}

  render() {
    return (
      <div>
  <h1>Phonebook</h1>
 <ContactForm  onSubmit={this.handleSubmit}/>

  <h2>Contacts</h2>
  {/* <Filter  />
  <ContactList  /> */}
</div>
    )
  }
}
