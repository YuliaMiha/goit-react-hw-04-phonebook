import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import  css  from './ContactForm.module.css';

export const ContactForm = ({ onAddContact }) =>{
    const [name,setName] = useState('');
    const [number, setNumber] = useState('');
    const actions = {
        name: setName,
        number: setNumber,
    };
     const handleChange = (e) => {
        const { name, value } = e.target;
        actions[name](value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddContact({ name, number, id:nanoid() });
        handleReset();
    };

    const handleReset = () => {
        console.log(Object.values(actions));
        Object.values(actions).map(item => item(''));
    
    nameInputId = nanoid();
    numberInputId = nanoid();
        
        return (
           <form className={css.form} action="" onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId} className={css.form__label}>
                    Name
                    </label>
                <input
                  id={nameInputId}
                  onChange={handleChange}
                  name="name"
                  value={name}
                   type="text"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  className={css.form__input}
              /> 
                    

                  <label htmlFor={this.numberInputId} className={css.form__label}>Number</label>
              <input
                  id={numberInputId}
                  onChange={handleChange}
                  name="number"
                  value={number}
                  type="tel"
               pattern="\+?\d{1,4}[-.\s]?\d{1,3}[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  className={css.form__input}
              />
              <button className={css.form__button} type="submit">Add contact</button>
        </form>
        )
    }
}


ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
}
