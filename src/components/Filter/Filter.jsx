import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import style from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    
    const inputFilter = event => {
        const value = event.target.value;
        dispatch(setFilter(value.toLowerCase()));
    }
    return (
        <label className={style.name}>
            Find contacts by name
            <input className={style.input} type='text' name='filter' onChange={inputFilter} />
        </label>
    );
}