import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import FriendsListPage from './pages/FriendsListPage';
import FriendPage from './pages/FriendPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute path="/friends-list/:friendId" component={FriendPage} />
        <PrivateRoute path="/friends-list" component={FriendsListPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
