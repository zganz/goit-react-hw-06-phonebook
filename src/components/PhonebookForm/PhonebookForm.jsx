// import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './phonebookForm.module.css';

export const PhonebookForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    onSubmit(contact);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={evt => setName(evt.target.value)}
          value={name}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={evt => setNumber(evt.target.value)}
          value={number}
        />
      </label>

      <button type="submit">Добавить контакт</button>
    </form>
  );
};

// export class PhonebookForm extends React.Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const contact = {
//       id: nanoid(),
//       name: this.state.name,
//       number: this.state.number,
//     };

//     this.props.onSubmit(contact);
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={css.form}>
//         <label className={css.label}>
//           Name
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={evt => this.setState({ name: evt.target.value })}
//             value={this.state.name}
//           />
//         </label>
//         <label className={css.label}>
//           Number
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={evt => this.setState({ number: evt.target.value })}
//             value={this.state.number}
//           />
//         </label>

//         <button type="submit">Добавить контакт</button>
//       </form>
//     );
//   }
// }
