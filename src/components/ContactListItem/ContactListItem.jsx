import { PropTypes } from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactListItem}>
      {name}: {number}
      <IconButton
        aria-label="delete"
        type="button"
        onClick={() => handleDelete(id)}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
