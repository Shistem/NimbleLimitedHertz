import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ChatApp from './components/ChatApp/ChatApp';
import Login from './components/Login/Login';
import { useAuth } from './hooks/useAuth';

const App = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chat">
          {user ? <ChatApp /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          {user ? <Redirect to="/chat" /> : <Login />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
