import React from 'react'
// import { IndexLink, Link } from 'react-router'
import './Header.scss'
import SearchBar from './SearchBar'

export const Header = () => (
  <div>
    {/*
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    */}
    <nav style={styles.navStyle}>
      <div>
        <img src='http://placehold.it/50x50' />
      </div>
      {/* */}
      <SearchBar />
      {/* */}
      <div>
        <ul style={styles.utilListStyle}>
          <li style={styles.listItemStyle}>
            <a href='#'>Explore</a>
          </li>
          <li style={styles.listItemStyle}>
            <a href='#'>Notifications</a>
          </li>
          <li style={styles.listItemStyle}>
            <a href='#'>Accounts</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

const styles = {
  navStyle: {
    padding: '20px',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  utilListStyle: {
    listStyleType: 'none'
  },
  listItemStyle: {
    padding: '5px',
    float: 'left'
  }
}

export default Header
