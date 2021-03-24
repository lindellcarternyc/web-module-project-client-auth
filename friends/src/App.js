import { Switch, Route, Link, useHistory } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import FriendsListPage from './pages/FriendsListPage';
import FriendPage from './pages/FriendPage';
import CreateFriendPage from './pages/CreateFriendPage';
import UpdateFriendPage from './pages/UpdateFriendPage';

function App() {
  const history = useHistory()

  const onLogout = () => {
    window.localStorage.removeItem('friendsListToken')
    history.push('/login')
  }

  return (
    <div>
      <nav>
        <Link to="/friends-list">Friends</Link>
        <Link to="/create-friend">Add Friend</Link>
        <button onClick={onLogout}>Log Out</button>
      </nav>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute path="/friends-list/:friendId" component={FriendPage} />
        <PrivateRoute path="/friends-list" component={FriendsListPage} />
        <PrivateRoute path="/create-friend" component={CreateFriendPage} />
        <PrivateRoute path="/update-friend/:friendId" component={UpdateFriendPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
