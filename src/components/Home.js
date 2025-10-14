import React from 'react';

function Home() {
    return (
        <div style={{
            padding: '40px',
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: '#f8f9fa'
        }}>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '60px 40px',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                marginBottom: '40px'
            }}>
                <h1 style={{
                    fontSize: '3em',
                    margin: '0 0 20px 0',
                    fontWeight: 'bold'
                }}>
                    Welcome Home! 🏠
                </h1>
                <p style={{
                    fontSize: '1.3em',
                    margin: '0',
                    opacity: '0.95'
                }}>
                    Your journey with React starts here
                </p>
            </div>

            {/* Features Section */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '25px',
                marginBottom: '40px'
            }}>
                <FeatureCard
                    icon="⚡"
                    title="Lightning Fast"
                    description="Built with React for optimal performance and smooth user experience."
                    color="#ffd93d"
                />
                <FeatureCard
                    icon="🎨"
                    title="Beautiful Design"
                    description="Modern and clean UI with attention to every detail and user interaction."
                    color="#ff6bcb"
                />
                <FeatureCard
                    icon="📱"
                    title="Fully Responsive"
                    description="Works seamlessly on all devices - desktop, tablet, and mobile."
                    color="#4facfe"
                />
            </div>

            {/* Info Section */}
            <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    🚀 Getting Started
                </h2>
                <ul style={{
                    fontSize: '1.1em',
                    lineHeight: '2',
                    color: '#555',
                    listStyle: 'none',
                    padding: 0
                }}>
                    <li>✓ Navigate using the links above to explore different pages</li>
                    <li>✓ Check out the About page to learn more about us</li>
                    <li>✓ Visit Categories to browse our collection</li>
                    <li>✓ Contact us for any questions or support</li>
                </ul>
            </div>

            {/* Stats Section */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '40px',
                flexWrap: 'wrap',
                gap: '20px'
            }}>
                <StatCard number="1000+" label="Happy Users" />
                <StatCard number="50+" label="Components" />
                <StatCard number="24/7" label="Support" />
                <StatCard number="100%" label="Satisfaction" />
            </div>
        </div>
    );
}

// Feature Card Component
function FeatureCard({ icon, title, description, color }) {
    return (
        <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            textAlign: 'center'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            }}>
            <div style={{
                fontSize: '3em',
                marginBottom: '15px',
                filter: `drop-shadow(2px 2px 4px ${color})`
            }}>
                {icon}
            </div>
            <h3 style={{ color: '#333', marginBottom: '10px' }}>{title}</h3>
            <p style={{ color: '#666', margin: 0, lineHeight: '1.6' }}>
                {description}
            </p>
        </div>
    );
}

// Stat Card Component
function StatCard({ number, label }) {
    return (
        <div style={{
            backgroundColor: 'white',
            padding: '25px 40px',
            borderRadius: '10px',
            boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
            textAlign: 'center',
            minWidth: '150px'
        }}>
            <div style={{
                fontSize: '2.5em',
                fontWeight: 'bold',
                color: '#667eea',
                marginBottom: '5px'
            }}>
                {number}
            </div>
            <div style={{
                fontSize: '0.9em',
                color: '#666',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>
                {label}
            </div>
        </div>
    );
}

export default Home;
