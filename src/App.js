import './App.css';
import Hello from './components/Hello';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import JsxExamples from './components/JsxExamples';
import Message from './components/Message';
import React from 'react';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  const name = "Han Naung Soe";
  const phone = "09777777777";

  return (
    <div>
      {/* Navigation Menu */}
      <nav style={{
        backgroundColor: '#007bff',
        padding: '15px',
        marginBottom: '20px',
        color: 'white'
      }}>
        <h2 style={{ margin: 0 }}>My React App - JSX Testing</h2>
      </nav>

      <FunctionClick />
      <hr style={{ margin: '40px 0' }} />
      <ClassClick />
      <hr style={{ margin: '40px 0' }} />
      <EventBind />
      <hr style={{ margin: '40px 0' }} />
      <ParentComponent />

      {/* JSX Examples Section - Main Content */}
      <JsxExamples name={name} phone={phone} />

      <hr style={{ margin: '40px 0' }} />

      {/* Other Components Section */}
      <div style={{ padding: '20px' }}>
        <h2>Other Components</h2>
        <Hello name={name} />
        <p>Welcome to your first React app!</p>
        <Message />
        <h3>User List:</h3>
        <UserList />

        <button onClick={() => alert('Button clicked!')}>Click me</button>

        {/* Using React.createElement() - displays all elements */}
        <div id="test" style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px'
        }}>
          <h3>React.createElement Examples:</h3>
          {React.createElement("h4", null, "Welcome To My App")}
          {React.createElement("p", null, "This is created using React.createElement()")}
          {React.createElement("p", null, "Navigate to different pages using the links above.")}
          {React.createElement("p", null, "You can use React.createElement or JSX syntax!")}
        </div>

        <h3>Message:</h3>
        <Message />

        <h3>Counter:</h3>
        <Counter />
      </div>

      <hr style={{ margin: '40px 0' }} />

      {/* Router Section */}
      <div style={{ padding: '20px' }}>
        <h2>Router Navigation</h2>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
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
