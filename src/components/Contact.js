import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! We'll get back to you soon.`);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div style={{
            padding: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: '#f8f9fa'
        }}>
            {/* Header Section */}
            <div style={{
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
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
                    Contact Us 📧
                </h1>
                <p style={{
                    fontSize: '1.2em',
                    margin: '0',
                    opacity: '0.95'
                }}>
                    We'd love to hear from you! Get in touch with our team.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px'
            }}>
                {/* Contact Form */}
                <div style={{
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '12px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
                }}>
                    <h2 style={{
                        color: '#333',
                        marginBottom: '25px',
                        fontSize: '1.8em'
                    }}>
                        Send us a Message
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <InputField
                            label="Your Name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
                        <InputField
                            label="Email Address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                        />
                        <InputField
                            label="Subject"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="How can we help?"
                            required
                        />
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '8px',
                                color: '#333',
                                fontWeight: '500'
                            }}>
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us more about your inquiry..."
                                required
                                rows="5"
                                style={{
                                    width: '100%',
                                    padding: '12px 15px',
                                    border: '2px solid #e0e0e0',
                                    borderRadius: '8px',
                                    fontSize: '1em',
                                    fontFamily: 'inherit',
                                    transition: 'border-color 0.3s',
                                    resize: 'vertical'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#4facfe'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                            />
                        </div>
                        <button type="submit" style={{
                            width: '100%',
                            padding: '15px',
                            backgroundColor: '#4facfe',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1.1em',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s, transform 0.2s',
                            boxShadow: '0 4px 15px rgba(79, 172, 254, 0.3)'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#00f2fe';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#4facfe';
                                e.target.style.transform = 'translateY(0)';
                            }}>
                            Send Message 🚀
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '40px',
                        borderRadius: '12px',
                        boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                        marginBottom: '30px'
                    }}>
                        <h2 style={{
                            color: '#333',
                            marginBottom: '25px',
                            fontSize: '1.8em'
                        }}>
                            Get in Touch
                        </h2>
                        <ContactInfo
                            icon="📧"
                            title="Email"
                            info="contact@example.com"
                            subInfo="support@example.com"
                        />
                        <ContactInfo
                            icon="📱"
                            title="Phone"
                            info="(555) 123-4567"
                            subInfo="Mon-Fri, 9am-6pm EST"
                        />
                        <ContactInfo
                            icon="📍"
                            title="Office"
                            info="123 React Street"
                            subInfo="San Francisco, CA 94102"
                        />
                        <ContactInfo
                            icon="🌐"
                            title="Website"
                            info="www.example.com"
                            subInfo="Visit our website"
                        />
                    </div>

                    {/* Social Media */}
                    <div style={{
                        backgroundColor: 'white',
                        padding: '30px',
                        borderRadius: '12px',
                        boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
                    }}>
                        <h3 style={{
                            color: '#333',
                            marginBottom: '20px',
                            fontSize: '1.5em'
                        }}>
                            Follow Us
                        </h3>
                        <div style={{
                            display: 'flex',
                            gap: '15px',
                            flexWrap: 'wrap'
                        }}>
                            <SocialButton icon="👍" platform="Facebook" color="#3b5998" />
                            <SocialButton icon="🐦" platform="Twitter" color="#1da1f2" />
                            <SocialButton icon="💼" platform="LinkedIn" color="#0077b5" />
                            <SocialButton icon="📷" platform="Instagram" color="#e4405f" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Response Section */}
            <div style={{
                marginTop: '40px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '30px',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 5px 20px rgba(0,0,0,0.15)'
            }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.5em' }}>⚡ Quick Response Time</h3>
                <p style={{ margin: 0, opacity: '0.95' }}>
                    We typically respond within 24 hours during business days
                </p>
            </div>
        </div>
    );
}

// Input Field Component
function InputField({ label, type, name, value, onChange, placeholder, required }) {
    return (
        <div style={{ marginBottom: '20px' }}>
            <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#333',
                fontWeight: '500'
            }}>
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '1em',
                    transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4facfe'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
        </div>
    );
}

// Contact Info Component
function ContactInfo({ icon, title, info, subInfo }) {
    return (
        <div style={{
            marginBottom: '25px',
            paddingBottom: '25px',
            borderBottom: '1px solid #e0e0e0'
        }}>
            <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                <div style={{ fontSize: '2em' }}>{icon}</div>
                <div>
                    <h4 style={{
                        margin: '0 0 5px 0',
                        color: '#333',
                        fontSize: '1.1em'
                    }}>
                        {title}
                    </h4>
                    <p style={{ margin: '0 0 3px 0', color: '#4facfe', fontWeight: '500' }}>
                        {info}
                    </p>
                    <p style={{ margin: 0, color: '#888', fontSize: '0.9em' }}>
                        {subInfo}
                    </p>
                </div>
            </div>
        </div>
    );
}

// Social Button Component
function SocialButton({ icon, platform, color }) {
    return (
        <button style={{
            flex: '1',
            minWidth: '120px',
            padding: '12px 20px',
            backgroundColor: color,
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1em',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            fontWeight: '500'
        }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
            }}>
            <span>{icon}</span>
            <span>{platform}</span>
        </button>
    );
}

export default Contact;
