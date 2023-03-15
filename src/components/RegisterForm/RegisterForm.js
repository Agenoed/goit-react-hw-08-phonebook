import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        id="name"
        label="Username"
        name="name"
        autoComplete="name"
        variant="standard"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
        variant="standard"
        margin="normal"
        required
        fullWidth
        type="email"
      />
      <TextField
        required
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        margin="normal"
        name="password"
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          margin: '0 auto',
          display: 'block',
        }}
      >
        Register
      </Button>
    </form>
  );
};
