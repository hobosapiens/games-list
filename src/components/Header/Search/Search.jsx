import { useSearch } from '@context/SearchProvider';
import IconCross from '@components/Icons/IconCross'

import styles from './Search.module.scss';

const Search = () => {
    const isSearch = useSearch();

    return (
        <div className={styles.search}>
            <input
                className={styles.search__input}
                type='text'
                placeholder="Sök på namn"
                value={isSearch.searchValue}
                onChange={(e) => isSearch.handleSearch(e.target.value)}
            />
            {isSearch.searchValue && (
                    <div 
                        className={styles.search__clear}
                        onClick={() => isSearch.handleSearch('')}
                    >
                        <IconCross />
                    </div>
                ) 
            }
        </div>
    )
}

export default Search;