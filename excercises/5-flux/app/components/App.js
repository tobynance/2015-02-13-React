import React from 'react';
import ContactsStore from '../stores/ContactsStore';
import ViewActionCreators from '../actions/ViewActionCreators';

export default class App extends React.Component {
  state = ContactsStore.getState();

  componentDidMount () {
    ContactsStore.addChangeListener(this.handleStoreChange);
    ViewActionCreators.loadContacts();
  }

  componentWillUnmount () {
    ContactsStore.removeChangeListener(this.handleStoreChange);
  }

  handleStoreChange = () => {
    this.setState(ContactsStore.getState());
  };

  renderContacts () {
    return this.state.contacts.map((contact) => {
      return <li key={contact.id}>{contact.first} {contact.last}</li>;
    });
  }

  render () {
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul>{this.renderContacts()}</ul>
      </div>
    );
  }
}
