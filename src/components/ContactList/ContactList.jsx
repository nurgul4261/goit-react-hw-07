import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice"; 
import Contact from "../Contact/Contact.jsx";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          className={styles.contactItem}
        />
      ))}
    </ul>
  );
};

export default ContactList;