import React from 'react'

class UserInfo extends React.Component {

  render () {
    // Fake user data
    const user = {
      username: 'faker',
      noOfPost: 82,
      followers: 297,
      following: 288,
      description: 'B.K'
    }

    return (
      <div style={styles.userInfoContainerStyle}>
        <img src='http://placehold.it/50x50' />
        <div style={styles.userInfoStyle}>
          <div>{user.username}</div>
          <div>{user.noOfPost} posts | {user.followers} followers | {user.following} following</div>
          <div>{user.description}</div>
        </div>
      </div>
    )
  }
}

const styles = {
  userInfoContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userInfoStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    padding: '15px'
  }
}

export default UserInfo
