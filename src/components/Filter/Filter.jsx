import PropTypes from 'prop-types';
import React from 'react';
import css from './Filter.module.css';

const Filter = ({filter, onChange}) => {
    return (
        <div className={css.filter}>
            <label className={css.filter__label}> Find contacts by name    
                <input className={css.filter__input} name='filter' type='text' value={filter} onChange={onChange} placeholder="Filter contacts" />
            </label>
        </div>  
    )
}
export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}