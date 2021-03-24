import { Switch, Route, Link, useHistory } from 'react-router-dom'

import Navbar from './components/NavBar'
import PrivateRoute from './components/PrivateRoute'

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import FriendsListPage from './pages/FriendsListPage';
import FriendPage from './pages/FriendPage';
import CreateFriendPage from './pages/CreateFriendPage';
import UpdateFriendPage from './pages/UpdateFriendPage'

import { UserContextProvider } from './contexts/UserContext'

function App() {

  return (
    <UserContextProvider>
      <div>
      <Navbar />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute path="/friends-list/:friendId" component={FriendPage} />
          <PrivateRoute path="/friends-list" component={FriendsListPage} />
          <PrivateRoute path="/create-friend" component={CreateFriendPage} />
          <PrivateRoute path="/update-friend/:friendId" component={UpdateFriendPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </UserContextProvider>
  );
}

export default App;
