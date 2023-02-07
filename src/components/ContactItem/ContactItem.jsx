import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from '../../Redux/contactsSlice';
import { useDispatch  } from 'react-redux';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.listItem} key={id}>
      <p className={css.contact}>
        {name}: <span className={css.number}> {number}</span>
      </p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactItem;
