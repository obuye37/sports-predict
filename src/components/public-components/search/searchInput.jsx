import React from 'react'
import * as styles from './search-input.module.css'
import { Search } from 'react-feather'

const SearchInput = () => {
  return (
    <div className={styles.searchContainer}>
      <input type='search' className={styles.searchInput} placeholder="Search..."/>
      <Search className={styles.searchIcon}/>
    </div>
       
    
  )
}

export default SearchInput