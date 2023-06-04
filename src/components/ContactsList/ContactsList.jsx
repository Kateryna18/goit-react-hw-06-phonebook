import React from 'react';
import css from 'components/ContactsList/ContactsList.module.css';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';

export function ContactsList() {
    const contacts = useSelector((state) => state.contacts);
    const filter = useSelector((state) => state.filter);

    const filteredContacts = contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(filter.toLowerCase().trim())
    );

    return (
    <ul className={css.contactsList}>
        {filteredContacts.map(contact => <ContactItem contactObj={contact} key={contact.id}/>)}
    </ul>
  )
}


// ......... ....USE HOOKS ..........................
// export function ContactsList({contacts, deleteContact}) {
//     return (
//     <ul className={css.contactsList}>
//         {contacts.map(contact => {
//             return (
//                 <li key={contact.id} className={css.contactsItem}>
//                     <div>
//                     <span className={css.contactsItemName}>{contact.name}</span>:
//                     <span className={css.contactsItemNumber}> {contact.number}</span>
//                     </div>
//                     <button className={css.contactsItemButton} onClick={() => deleteContact(contact.id)}>Delete</button>
//                 </li>
//             )
//         })}
//     </ul>
//   )
// }

// ContactsList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.exact({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//         })
//     ),
//     deleteContact: PropTypes.func.isRequired,
// }