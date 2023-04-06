import { selectFilteredContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import style from './ContactList.module.css';

export const ContactList = () => {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts);
    const handleDelete = id => {
        dispatch(deleteContact(id));
    }

  return (
        <ul className={style.list}>
            {filteredContacts.map(({id, name, number}) => (
                <li className={style.item} key={id}>
                    <p>
                        {name}: {number}
                    </p>
                    <button className={style.button} type="button" onClick={() => handleDelete(id)} value="delete">Delete contact</button>
                </li>
            ))}
        </ul>
    )    
}