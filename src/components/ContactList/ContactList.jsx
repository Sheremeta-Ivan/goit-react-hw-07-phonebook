import React from 'react';
import { useEffect } from 'react';
import { List, Item, Button, Text } from './ContactList.styled';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectVissibleContacts,
  selectError,
  selectLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import Spinner from 'components/Spinner/Spinner';
import { Container } from 'components/App/App.styled';

const ContactList = () => {
  const contacts = useSelector(selectVissibleContacts);
  const error = useSelector(selectError);
  const isloading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = id => dispatch(deleteContact(id));

  return (
    <>
      {isloading && <Spinner />}

      {!contacts.length && !error && !isloading && (
        <Text>No contacts found</Text>
      )}

      {error && <Text>{error}</Text>}

      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            {name + ' : ' + number}
            {
              // delete contact
              <Button type="button" name="delete" onClick={() => onDelete(id)}>
                <DeleteIcon fill="#000000" width="20" height="20" />
                Delete
              </Button>
            }
          </Item>
        ))}
      </List>
    </>
  );
};

export default ContactList;
