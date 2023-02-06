import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const STORAGE_KEY = 'phonebook';

export default function App() {
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(phonebook));
  }, [phonebook]);

  const handleSubmit = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (phonebook.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }
    setPhonebook(phonebook => [...phonebook, newContact]);
  };

  const handleChange = evt => {
    setFilter(evt.target.value);
  };

  return (
    <div className={css.mainModule}>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter handleChange={handleChange} />
      <ContactList />
    </div>
  );
}
