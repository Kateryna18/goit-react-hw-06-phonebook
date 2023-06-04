import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector((state) => state.contacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter
      />
      {contacts.length !== 0 && <ContactsList/>}
      <Toaster />
    </div>
  );
}



// ......... ....USE HOOKS ..........................
// export function App() {
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(window.localStorage.getItem("CONTACTS_KEY")) ?? [];
//   });
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem("CONTACTS_KEY", JSON.stringify(contacts))
//   }, [contacts])

//   const handleAddContact = contact => {
//     if (contacts.some(item => item.name === contact.name)) {
//       toast.error('Contact already exists');
//       return true;
//     }
//     setContacts(prevContacts => [...prevContacts, contact]);
//     return false;
//   };

//   const handleChangeFilter = e => {
//     setFilter(e.target.value);
//   };

//   const handleFilterContacts = () => {
//     return contacts.filter(contact =>
//       contact.name
//         .toLowerCase()
//         .includes(filter.toLowerCase().trim())
//     );
//   };

//   const handleDeleteContact = id => {
//     setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id))
//   };

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm addContact={handleAddContact} />
//       <h2>Contacts</h2>
//       <Filter
//         value={filter}
//         handleChange={handleChangeFilter}
//       />
//       <ContactsList/>
//       {contacts.length !== 0 && <ContactsList
//         contacts={handleFilterContacts()}
//         deleteContact={handleDeleteContact}
//       />}
//       <Toaster />
//     </div>
//   );
// }
