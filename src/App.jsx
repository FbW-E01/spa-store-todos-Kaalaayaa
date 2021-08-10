import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import TodoList from './components/TodoList';
import UserContext from './context/UserContext';

function App() {
  const [user, setUser] = useState(null);
  const contextObject = { user, setUser }

  return (
    <UserContext.Provider value={contextObject}>
    <div className="App">
      <h1>Codelicious TODO</h1>

      {user && <>
        <p>Welcome, {user.name} <a href="#" onClick={() => { setUser(null) }}>Log out</a></p>
        <hr/>
        <TodoList />
      </>}
      {!user && <Login />}
    </div>
    </UserContext.Provider>
  );
}

export default App;
