export function getConversationsFromStorage() {
  const storedConversations = localStorage.getItem('conversations');
  return storedConversations ? JSON.parse(storedConversations) : null;
}

export function saveConversationsToStorage(conversations) {
  localStorage.setItem('conversations', JSON.stringify(conversations));
}

export function getUserFromStorage() {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
}

export function saveUserToStorage(user) {
  localStorage.setItem('user', JSON.stringify(user));
}