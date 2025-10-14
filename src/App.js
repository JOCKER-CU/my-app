import './App.css';
import Hello from './components/Hello';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import JsxExamples from './components/JsxExamples';
import Message from './components/Message';
import React, { useState } from 'react';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Bag from './components/Bag';
import JsxStyling from './components/JsxStyling';
import ConditionalStyling from './components/ConditionalStyling';
import FunctionExpression from './components/FunctionExpression';
import Button from './components/Button';
import NameList from './components/NameList';
import Registration from './components/Registration';
import TwoWaysDataBinding from './components/TwoWaysDataBinding';
import RefUsage from './components/RefUsage';
import LiftingState from './components/LiftingState';
import ExportImportDemo from './components/ExportImportDemo';
import Categories from './components/route/Categories';

function App() {
  const name = "Han Naung Soe";
  const phone = "09777777777";
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => setIsOn(!isOn);

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

      <h1>React Router</h1>
      <hr style={{ margin: '40px 0', border: '3px solid #2196f3' }} />

      {/* Navigation Links */}
      <nav style={{
        display: 'flex',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <Link to="/" style={{
          padding: '10px 20px',
          backgroundColor: '#667eea',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s'
        }}>
          🏠 Home
        </Link>
        <Link to="/about" style={{
          padding: '10px 20px',
          backgroundColor: '#f093fb',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s'
        }}>
          👋 About
        </Link>
        <Link to="/contact" style={{
          padding: '10px 20px',
          backgroundColor: '#4facfe',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s'
        }}>
          📧 Contact
        </Link>
        <Link to="/category" style={{
          padding: '10px 20px',
          backgroundColor: '#43e97b',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s'
        }}>
          🗂️ Categories
        </Link>
      </nav>

      <hr style={{ margin: '40px 0', border: '3px solid #2196f3' }} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Categories />} />
      </Routes>

      {/* Export/Import Examples Section */}
      <ExportImportDemo />
      <hr style={{ margin: '40px 0', border: '3px solid #2196f3' }} />

      <Registration />
      <hr style={{ margin: '40px 0' }} />
      <TwoWaysDataBinding />
      <hr style={{ margin: '40px 0' }} />
      <LiftingState isON={isOn} onToggle={toggleLight} />
      <hr style={{ margin: '40px 0' }} />
      <Button />
      <hr style={{ margin: '40px 0' }} />
      <RefUsage />
      <hr style={{ margin: '40px 0' }} />
      <FunctionClick />
      <hr style={{ margin: '40px 0' }} />
      <ClassClick />
      <hr style={{ margin: '40px 0' }} />
      <EventBind />
      <hr style={{ margin: '40px 0' }} />
      <ParentComponent />
      <hr style={{ margin: '40px 0' }} />
      <UserGreeting />
      <hr style={{ margin: '40px 0' }} />
      <Bag />
      <hr style={{ margin: '40px 0' }} />
      <JsxStyling />
      <hr style={{ margin: '40px 0' }} />
      <ConditionalStyling isLoggedIn={true} />
      <hr style={{ margin: '40px 0' }} />
      <ConditionalStyling isLoggedIn={false} />
      <hr style={{ margin: '40px 0' }} />
      <FunctionExpression first="First" second="Second" third="Third" />
      <hr style={{ margin: '40px 0' }} />
      <NameList />
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
