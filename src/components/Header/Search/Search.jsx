import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearch } from '@store/actions';
import IconCross from '@components/Icons/IconCross'
import useDebouncedDispatch from '@hooks/debouncedDispatch'

import styles from './Search.module.scss';

const Search = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector(state => state.gamesReducer.search);
    const debouncedDispatch = useDebouncedDispatch(dispatch, 250);
    const [inputValue, setInputValue] = useState(searchValue);
 
    const handleSearch = value => {
        setInputValue(value)
        debouncedDispatch(setSearch(value))
    }

    return (
        <div className={styles.search}>
            <input
                className={styles.search__input}
                type='text'
                placeholder="Sök på namn"
                value={inputValue}
                onChange={(e) => handleSearch(e.target.value)}
            />
            {searchValue && (
                    <div 
                        className={styles.search__clear}
                        onClick={() => handleSearch('')}
                    >
                        <IconCross />
                    </div>
                ) 
            }
        </div>
    )
}

export default Search;