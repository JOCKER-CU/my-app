import React from 'react';

// Mixed Exports Example
// You can have ONE default export + MULTIPLE named exports in the same file

// Named export - helper component
export function BookRating({ rating }) {
    const stars = '⭐'.repeat(rating);
    return <span>{stars} ({rating}/5)</span>;
}

// Named export - constant
export const GENRES = ['Fiction', 'Non-Fiction', 'Mystery', 'Sci-Fi', 'Romance'];

// Named export - utility function
export const formatAuthor = (firstName, lastName) => {
    return `${lastName}, ${firstName}`;
};

// Default export - main component
function BookCard({ title, author, genre, rating, year }) {
    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#e8f5e9',
            borderRadius: '8px',
            marginBottom: '10px',
            border: '2px solid #4caf50'
        }}>
            <h3>{title}</h3>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Genre:</strong> {genre}</p>
            <p><strong>Year:</strong> {year}</p>
            <p><strong>Rating:</strong> <BookRating rating={rating} /></p>
        </div>
    );
}

// Default export at the end
export default BookCard;

// Summary:
// - BookCard is the DEFAULT export
// - BookRating, GENRES, and formatAuthor are NAMED exports

