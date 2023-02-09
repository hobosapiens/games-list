import PropTypes from 'prop-types';
import { useSearch } from '@context/SearchProvider';

import styles from './Search.module.scss';

const Search = () => {
    const isSearch = useSearch();
    return (
        <div className={styles.search}>
            <input
                type='text'
                placeholder="Sök på namn"
                value={isSearch.searchValue}
                onChange={(event) => isSearch.handleSearch(event.target.value)}
            />
        </div>
    )
}

Search.propTypes = {
    value: PropTypes.string
}

export default Search;