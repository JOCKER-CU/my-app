import React from 'react';

function About() {
    return (
        <div style={{
            padding: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: '#f8f9fa'
        }}>
            {/* Header Section */}
            <div style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                padding: '50px 40px',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                marginBottom: '40px'
            }}>
                <h1 style={{
                    fontSize: '3em',
                    margin: '0 0 15px 0',
                    fontWeight: 'bold'
                }}>
                    About Us 👋
                </h1>
                <p style={{
                    fontSize: '1.2em',
                    margin: '0',
                    opacity: '0.95'
                }}>
                    Passionate about creating amazing web experiences
                </p>
            </div>

            {/* Mission & Vision Section */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                <InfoBox
                    icon="🎯"
                    title="Our Mission"
                    content="To empower developers and businesses with cutting-edge React solutions that transform ideas into reality. We believe in creating web experiences that are not just functional, but delightful."
                    bgColor="#e3f2fd"
                    iconColor="#2196f3"
                />
                <InfoBox
                    icon="🔭"
                    title="Our Vision"
                    content="To be the leading innovators in modern web development, setting new standards for user experience and performance. We envision a web that is accessible, beautiful, and fast."
                    bgColor="#f3e5f5"
                    iconColor="#9c27b0"
                />
            </div>

            {/* Company Story */}
            <div style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                marginBottom: '40px'
            }}>
                <h2 style={{
                    color: '#333',
                    marginBottom: '25px',
                    fontSize: '2em',
                    borderBottom: '3px solid #f5576c',
                    paddingBottom: '10px',
                    display: 'inline-block'
                }}>
                    Our Story 📖
                </h2>
                <p style={{
                    fontSize: '1.1em',
                    lineHeight: '1.8',
                    color: '#555',
                    marginBottom: '20px'
                }}>
                    Founded in 2020, we started with a simple goal: to make web development more accessible and enjoyable.
                    What began as a small team of passionate developers has grown into a thriving community dedicated
                    to pushing the boundaries of what's possible with React.
                </p>
                <p style={{
                    fontSize: '1.1em',
                    lineHeight: '1.8',
                    color: '#555'
                }}>
                    Today, we've helped thousands of developers build amazing applications, and we're just getting started.
                    Every line of code we write, every component we create, is driven by our commitment to excellence
                    and our passion for the craft.
                </p>
            </div>

            {/* Team Values */}
            <h2 style={{
                textAlign: 'center',
                color: '#333',
                fontSize: '2.2em',
                marginBottom: '30px'
            }}>
                Our Core Values 💎
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                marginBottom: '40px'
            }}>
                <ValueCard emoji="🚀" title="Innovation" description="Always pushing boundaries" />
                <ValueCard emoji="🤝" title="Collaboration" description="Working together to succeed" />
                <ValueCard emoji="💡" title="Creativity" description="Thinking outside the box" />
                <ValueCard emoji="⭐" title="Excellence" description="Quality in everything we do" />
            </div>

            {/* Contact CTA */}
            <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '40px',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
            }}>
                <h2 style={{ margin: '0 0 15px 0', fontSize: '2em' }}>
                    Want to Learn More?
                </h2>
                <p style={{ margin: '0 0 20px 0', fontSize: '1.1em', opacity: '0.95' }}>
                    We'd love to hear from you! Get in touch with our team.
                </p>
                <button style={{
                    backgroundColor: 'white',
                    color: '#667eea',
                    border: 'none',
                    padding: '15px 40px',
                    fontSize: '1.1em',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    transition: 'transform 0.2s'
                }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                    Contact Us →
                </button>
            </div>
        </div>
    );
}

// Info Box Component
function InfoBox({ icon, title, content, bgColor, iconColor }) {
    return (
        <div style={{
            backgroundColor: bgColor,
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 3px 15px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                fontSize: '3em',
                marginBottom: '15px',
                color: iconColor
            }}>
                {icon}
            </div>
            <h3 style={{
                color: '#333',
                marginBottom: '15px',
                fontSize: '1.5em'
            }}>
                {title}
            </h3>
            <p style={{
                color: '#555',
                lineHeight: '1.7',
                margin: 0
            }}>
                {content}
            </p>
        </div>
    );
}

// Value Card Component
function ValueCard({ emoji, title, description }) {
    return (
        <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
        }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ fontSize: '2.5em', marginBottom: '10px' }}>{emoji}</div>
            <h4 style={{ color: '#333', marginBottom: '8px', fontSize: '1.2em' }}>{title}</h4>
            <p style={{ color: '#666', margin: 0, fontSize: '0.95em' }}>{description}</p>
        </div>
    );
}

export default About;
