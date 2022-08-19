import css from './Contact.module.css';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <span>{`${name}: ${number}`}</span>
          <span>
            <button className={css.contact} onClick={() => handleDelete(id)}>
              delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};
