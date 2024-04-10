import { useState } from 'react';
import axios from 'axios';

export function useAuth() {
  const [user, setUser] = useState(null);

  const handleDiscordLogin = async () => {
    try {
      const response = await axios.get('/api/discord/login');
      const { accessToken, user } = response.data;
      setUser(user);
      // Save the access token and user data to local storage or context
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleLogout = () => {
    setUser(null);
    // Remove the access token and user data from local storage or context
  };

  return { user, handleDiscordLogin, handleLogout };
}