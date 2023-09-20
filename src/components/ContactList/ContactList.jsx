import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getVissibleContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getVissibleContacts);
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(removeContact());
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            // delete contact
            <Button type="button" name="delete" onClick={handleDelete}>
              <DeleteIcon fill="#000000" width="20" height="20" />
              Delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
