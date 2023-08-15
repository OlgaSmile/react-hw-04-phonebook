import { useEffect, useState } from 'react';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Input from './Input/Input';

export const App = () => {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };
  const parsedData = JSON.parse(localStorage.getItem('contacts'));

  const [contacts, setContacts] = useState(parsedData||[]);
  const [filter, setFilter] = useState('');
  
  // componentDidMount() {
  //   const parsedData = JSON.parse(localStorage.getItem('contacts'));
  //   console.log(parsedData)
  //   if (parsedData!==null) {
  //     this.setState({ contacts: parsedData });
  //   }
  // }

  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [contacts]);
  
  // componentDidUpdate(prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  const updateState = values => {
    this.setState(({ contacts }) => ({ contacts: [values, ...contacts] }));
  };

  const onDeleteClick = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(ob => ob.id !== id),
    }));
  };

  const checkName = name => {
    return this.state.contacts.find(ob => name === ob.name);
  };

  const onFilterChange = e => {
    this.setState({
      filter: e.target.attributes.name.ownerElement.value.toLowerCase(),
    });
  };

  const onFilter = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter)
    );
  };

    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>

        <Input updateState={this.updateState} checkName={this.checkName} />

        <Filter onFilterChange={this.onFilterChange} />

        <Contacts
          onDeleteClick={this.onDeleteClick}
          contacts={this.onFilter()}
        />
      </div>
    );
  }
