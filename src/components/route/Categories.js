import React, { useState } from 'react';

function Categories() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        {
            id: 1,
            name: 'Technology',
            icon: '💻',
            description: 'Latest tech trends, gadgets, and innovations',
            items: ['Web Development', 'Mobile Apps', 'AI & ML', 'Cloud Computing'],
            color: '#667eea'
        },
        {
            id: 2,
            name: 'Design',
            icon: '🎨',
            description: 'Creative design resources and inspiration',
            items: ['UI/UX Design', 'Graphic Design', 'Illustrations', 'Typography'],
            color: '#f093fb'
        },
        {
            id: 3,
            name: 'Business',
            icon: '💼',
            description: 'Business strategies and entrepreneurship',
            items: ['Marketing', 'Finance', 'Management', 'Startups'],
            color: '#4facfe'
        },
        {
            id: 4,
            name: 'Education',
            icon: '📚',
            description: 'Learning resources and courses',
            items: ['Online Courses', 'Tutorials', 'Certifications', 'Workshops'],
            color: '#43e97b'
        },
        {
            id: 5,
            name: 'Entertainment',
            icon: '🎬',
            description: 'Movies, music, and entertainment content',
            items: ['Movies', 'Music', 'Games', 'Podcasts'],
            color: '#fa709a'
        },
        {
            id: 6,
            name: 'Lifestyle',
            icon: '🌟',
            description: 'Health, fitness, and lifestyle tips',
            items: ['Health', 'Fitness', 'Travel', 'Food'],
            color: '#fee140'
        }
    ];

    return (
        <div style={{
            padding: '40px',
            maxWidth: '1400px',
            margin: '0 auto',
            backgroundColor: '#f8f9fa'
        }}>
            {/* Header Section */}
            <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                    Browse Categories 🗂️
                </h1>
                <p style={{
                    fontSize: '1.2em',
                    margin: '0',
                    opacity: '0.95'
                }}>
                    Explore our diverse collection of content and resources
                </p>
            </div>

            {/* Stats Bar */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginBottom: '40px',
                flexWrap: 'wrap',
                gap: '15px'
            }}>
                <StatBox number={categories.length} label="Categories" icon="📁" />
                <StatBox number="100+" label="Resources" icon="📦" />
                <StatBox number="50+" label="Tutorials" icon="📖" />
                <StatBox number="1000+" label="Users" icon="👥" />
            </div>

            {/* Categories Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        category={category}
                        isSelected={selectedCategory?.id === category.id}
                        onClick={() => setSelectedCategory(
                            selectedCategory?.id === category.id ? null : category
                        )}
                    />
                ))}
            </div>

            {/* Selected Category Details */}
            {selectedCategory && (
                <div style={{
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    animation: 'slideIn 0.3s ease'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        marginBottom: '25px',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{
                            fontSize: '4em',
                            background: `linear-gradient(135deg, ${selectedCategory.color} 0%, ${selectedCategory.color}dd 100%)`,
                            padding: '20px',
                            borderRadius: '15px',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                        }}>
                            {selectedCategory.icon}
                        </div>
                        <div>
                            <h2 style={{
                                margin: '0 0 10px 0',
                                fontSize: '2.5em',
                                color: '#333'
                            }}>
                                {selectedCategory.name}
                            </h2>
                            <p style={{
                                margin: 0,
                                fontSize: '1.2em',
                                color: '#666'
                            }}>
                                {selectedCategory.description}
                            </p>
                        </div>
                    </div>

                    <h3 style={{
                        color: '#333',
                        marginBottom: '20px',
                        fontSize: '1.5em'
                    }}>
                        Popular Topics:
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '15px'
                    }}>
                        {selectedCategory.items.map((item, index) => (
                            <div key={index} style={{
                                padding: '15px 20px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '8px',
                                border: `2px solid ${selectedCategory.color}`,
                                color: '#333',
                                fontWeight: '500',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = selectedCategory.color;
                                    e.target.style.color = 'white';
                                    e.target.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#f8f9fa';
                                    e.target.style.color = '#333';
                                    e.target.style.transform = 'translateY(0)';
                                }}>
                                {item}
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => setSelectedCategory(null)}
                        style={{
                            marginTop: '30px',
                            padding: '12px 30px',
                            backgroundColor: selectedCategory.color,
                            color: 'white',
                            border: 'none',
                            borderRadius: '25px',
                            fontSize: '1.1em',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                            e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                        }}
                    >
                        Close Details
                    </button>
                </div>
            )}

            {/* Featured Section */}
            <div style={{
                marginTop: '40px',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                padding: '40px',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}>
                <h2 style={{ margin: '0 0 15px 0', fontSize: '2em' }}>
                    🌟 Featured Content
                </h2>
                <p style={{
                    margin: '0 0 20px 0',
                    fontSize: '1.1em',
                    opacity: '0.95'
                }}>
                    Discover curated content from all categories
                </p>
                <button style={{
                    backgroundColor: 'white',
                    color: '#f5576c',
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
                    Explore Featured →
                </button>
            </div>
        </div>
    );
}

// Category Card Component
function CategoryCard({ category, isSelected, onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: isSelected
                    ? `0 10px 30px ${category.color}50`
                    : '0 5px 15px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: isSelected ? `3px solid ${category.color}` : '3px solid transparent',
                transform: isSelected ? 'scale(1.02)' : 'scale(1)'
            }}
            onMouseEnter={(e) => {
                if (!isSelected) {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
                }
            }}
            onMouseLeave={(e) => {
                if (!isSelected) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                }
            }}
        >
            <div style={{
                fontSize: '3.5em',
                marginBottom: '15px',
                textAlign: 'center',
                filter: `drop-shadow(2px 2px 8px ${category.color})`
            }}>
                {category.icon}
            </div>
            <h3 style={{
                color: '#333',
                marginBottom: '10px',
                fontSize: '1.5em',
                textAlign: 'center'
            }}>
                {category.name}
            </h3>
            <p style={{
                color: '#666',
                margin: '0 0 15px 0',
                lineHeight: '1.6',
                textAlign: 'center'
            }}>
                {category.description}
            </p>
            <div style={{
                padding: '10px',
                backgroundColor: `${category.color}15`,
                borderRadius: '8px',
                textAlign: 'center',
                color: category.color,
                fontWeight: 'bold',
                fontSize: '0.9em'
            }}>
                {category.items.length} Topics
            </div>
        </div>
    );
}

// Stat Box Component
function StatBox({ number, label, icon }) {
    return (
        <div style={{
            backgroundColor: 'white',
            padding: '25px 35px',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'center',
            minWidth: '140px',
            transition: 'transform 0.3s ease'
        }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ fontSize: '2em', marginBottom: '5px' }}>{icon}</div>
            <div style={{
                fontSize: '2em',
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

export default Categories;

