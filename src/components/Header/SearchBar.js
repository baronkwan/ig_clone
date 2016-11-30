import React from 'react'

class SearchBar extends React.Component {
  render () {
    return (
      <div style={this.props}>
        <input
          type='text'
          placeholder='Search'
        />
      </div>
    )
  }
}

export default SearchBar
