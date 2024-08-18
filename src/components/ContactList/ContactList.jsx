import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
}
