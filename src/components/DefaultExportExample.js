import React from 'react';

// Default Export Example
// You can only have ONE default export per file
// When importing, you can use any name you want

function UserProfile({ name, age, occupation }) {
    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#e3f2fd',
            borderRadius: '8px',
            marginBottom: '10px'
        }}>
            <h3>User Profile (Default Export)</h3>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Occupation:</strong> {occupation}</p>
        </div>
    );
}

// Default export - notice there's only ONE
export default UserProfile;

// Alternative syntax:
// export default function UserProfile() { ... }

