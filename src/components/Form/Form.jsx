import { Form, Field } from 'formik';
import { Formik, ErrorMessage } from 'formik';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import Button from '@mui/material/Button';

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
};

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const addContacts = (value, { resetForm }) => {
    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === value.name.toLowerCase()
      )
    ) {
      alert(`${value.name} is already in contacts`);
      return;
    }
    dispatch(addContact(value));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={addContacts}>
      <Form className={css.form}>
        <label className={css.formLabel} htmlFor="name">
          Name
          <Field
            className={css.formName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Name"
            required
          />
          <FormError name="name" />
        </label>
        <label className={css.formLabel} htmlFor="number">
          Number
          <Field
            className={css.formNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Number"
            required
          />
          <FormError name="number" />
        </label>
        <Button
          type="submit"
          variant="contained"
          sx={{
            margin: '15px auto',
            display: 'block',
          }}
        >
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};
