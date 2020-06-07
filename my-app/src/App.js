import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      followers: []
    }
  }

  componentDidMount() {
    console.log('component mounted');
    axios
      .get('https://api.github.com/users/Jdunson98')
      .then(res1 => {
        console.log(res1.data)
        axios
          .get(res1.data.followers_url)
          .then(res2 => {
            console.log(res2.data)
            this.setState({
              user: res1.data,
              followers: res2.data
            })
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>Github UserCards</h1>
        <UserCard 
          userImage = {this.state.user.avatar_url}
          login = {this.state.user.login}
          followers = {this.state.user.followers}  />
        {
          this.state.followers.map(user => {
            return <UserCard 
              userImage = {user.avatar_url}
              login = {user.login}
            />
          })
        }
      </div>
    )
  }
}

export default App;
