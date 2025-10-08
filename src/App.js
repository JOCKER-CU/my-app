import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const name = "Han Naung Soe";
  return (
    <div>
      <Welcome />
      <p>Welcome to your first React app!</p>
      <ul>
        <UserList />
      </ul>
      <button>Click me</button>

      <div>
        <Hello name={name} />
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Welcome() {
  return (
    <div>
      <h1>Welcome To My App</h1>
    </div>
  );
}

function UserCard(props) {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </div>
  )
}

function UserList() {
  const users = [
    { name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890" },
    { name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210" },
    { name: "Mike Johnson", email: "mike.johnson@example.com", phone: "456-789-0123" },
  ]
  return (
    <div>
      {users.map((user) => (
          <UserCard key={user.name} name={user.name} email={user.email} phone={user.phone} />
      ))}
    </div>
  )
}

export default App;
