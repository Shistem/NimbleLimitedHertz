import React from 'react';
import { useHistory } from 'react-router-dom';
import DiscordLoginButton from './DiscordLoginButton';
import { useAuth } from '../../hooks/useAuth';

function Login() {
  const { handleDiscordLogin } = useAuth();
  const history = useHistory();

  const handleLogin = async () => {
    try {
      await handleDiscordLogin();
      history.push('/chat');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <DiscordLoginButton onClick={handleLogin} />
    </div>
  );
}

export default Login;