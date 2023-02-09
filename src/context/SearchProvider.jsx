import React, { useContext, useState } from 'react';

const SearchContext = React.createContext();

export const SearchProvider = ({ children, ...props }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = value => {
        setSearchValue(value);
    }

    return (
        <SearchContext.Provider
            value={{
                searchValue,
                handleSearch
            }}
            {...props}
        >
            {children}    
        </SearchContext.Provider>
    )
}

export default SearchProvider;

export const useSearch = () => useContext(SearchContext);