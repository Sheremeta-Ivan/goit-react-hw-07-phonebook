import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { Container, Title, SubTitle } from './App.styled';

const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm />

      <SubTitle>Contacts</SubTitle>

      <Filter />

      <ContactList />
    </Container>
  );
};

export default App;
