import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '@store/actions';
import IconCross from '@components/Icons/IconCross'

import styles from './Search.module.scss';

const Search = () => {
    const searchValue = useSelector(state => state.gamesReducer.search);
    const dispatch = useDispatch();

    const handleSearch = value => {
        dispatch(setSearch(value))
    }

    return (
        <div className={styles.search}>
            <input
                className={styles.search__input}
                type='text'
                placeholder="Sök på namn"
                value={searchValue}
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