import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { Section } from "./Section/Section";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Section title="Phonebook">
        <ContactForm/>
      </Section>
      <Section title="Contacts">
        <Filter/>
        <ContactList/>
      </Section>
    </>
  );
};