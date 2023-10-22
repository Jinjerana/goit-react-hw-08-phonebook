import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactsList from 'components/Contacts/Contacts';
import Filter from 'components/Filter';
import { selectVisibleContacts } from 'Redux/Contacts/selectors';
import { fetchContacts } from 'Redux/Contacts/contactsAPI';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={barStyles}>
      <Filter />
      <div>{isLoadingContacts && 'Please wait...'}</div>
      <h1>Contacts</h1>
      <ContactsList />
    </div>
  );
}