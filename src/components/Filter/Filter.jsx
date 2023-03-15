import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import { getStatusFilter } from 'redux/contacts/selectors';
import TextField from '@mui/material/TextField';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleChange = event => {
    dispatch(setStatusFilter(event.currentTarget.value));
  };
  return (
    <TextField
      id="filled-search"
      label="Find contacts by name"
      type="search"
      variant="filled"
      htmlFor="filter"
      value={filter}
      onChange={handleChange}
      name="filter"
    />
  );
}
