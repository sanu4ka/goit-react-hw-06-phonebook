import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const normalizeFilter = filter.toLowerCase();

  const filteredContacts = getFiltered();
  function getFiltered() {
    return contacts
      .filter(contact => contact.name.toLowerCase())
      .includes(normalizeFilter);
  }

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ name, id, number }) => (
        <ContactItem key={id} name={name} number={number} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
