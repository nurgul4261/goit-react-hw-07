import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";
import Contact from "../Contact/Contact.jsx";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

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