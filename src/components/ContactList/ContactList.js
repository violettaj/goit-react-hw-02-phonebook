import { ContactListElement } from '../ContactListElement/ContactListElement.js';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
        {contacts.map(({ name, id }) => (
        <ContactListElement
          key={id}
          name={name}
        />
      ))}
    </ul>
  );
};

