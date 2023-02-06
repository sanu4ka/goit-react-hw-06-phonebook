import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contactsSlice';

const ContactItem = ({ key, name, number }) => {
  return (
    <li className={css.listItem} key={key}>
      <p className={css.contact}>
        {name}:<span className={css.number}> {number}</span>
      </p>
      <button type="button" onClick={() => deleteContact(key)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
