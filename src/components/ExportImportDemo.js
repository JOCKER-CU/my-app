import React from 'react';

// This component demonstrates how to import different export types

// 1. DEFAULT IMPORT - can use any name
//    Import syntax: import AnyName from './file'
import UserProfile from './DefaultExportExample';
// We could also name it: import User from './DefaultExportExample';

// 2. NAMED IMPORTS - must use exact names (or alias with 'as')
//    Import syntax: import { ExactName1, ExactName2 } from './file'
import { ProductList, calculateTotal, TAX_RATE } from './NamedExportExample';

// 3. MIXED IMPORTS - default + named in same statement
//    Import syntax: import DefaultName, { NamedExport1, NamedExport2 } from './file'
import BookCard, { GENRES, formatAuthor } from './MixedExportExample';

// 4. ALIASING NAMED IMPORTS
//    Import syntax: import { OriginalName as NewName } from './file'
// import { ProductCard as Product } from './NamedExportExample';

// 5. IMPORT ALL as namespace
//    Import syntax: import * as Name from './file'
// import * as BookComponents from './MixedExportExample';
// Then use: BookComponents.default, BookComponents.BookRating, etc.

function ExportImportDemo() {
    const sampleProducts = [
        { name: 'Laptop', price: 999, inStock: true },
        { name: 'Mouse', price: 29, inStock: true },
        { name: 'Keyboard', price: 79, inStock: false }
    ];

    const total = calculateTotal(sampleProducts);
    const totalWithTax = total * (1 + TAX_RATE);

    return (
        <div style={{ padding: '20px', backgroundColor: '#fafafa' }}>
            <h1 style={{
                textAlign: 'center',
                color: '#333',
                borderBottom: '3px solid #2196f3',
                paddingBottom: '10px'
            }}>
                React Export & Import Examples
            </h1>

            {/* Section 1: Default Export Demo */}
            <section style={{ marginTop: '30px' }}>
                <h2 style={{ color: '#1976d2' }}>1. Default Export Example</h2>
                <div style={{
                    padding: '15px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <p><strong>File:</strong> DefaultExportExample.js</p>
                    <p><strong>Export:</strong> <code>export default UserProfile;</code></p>
                    <p><strong>Import:</strong> <code>import UserProfile from './DefaultExportExample';</code></p>
                    <p><em>Note: You can import with any name, like: import User from './DefaultExportExample'</em></p>

                    <UserProfile
                        name="John Doe"
                        age={30}
                        occupation="Software Engineer"
                    />
                </div>
            </section>

            {/* Section 2: Named Exports Demo */}
            <section style={{ marginTop: '30px' }}>
                <h2 style={{ color: '#f57c00' }}>2. Named Exports Example</h2>
                <div style={{
                    padding: '15px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <p><strong>File:</strong> NamedExportExample.js</p>
                    <p><strong>Exports:</strong> <code>export function ProductCard &#123;...&#125;</code>,
                        <code> export function ProductList &#123;...&#125;</code></p>
                    <p><strong>Import:</strong> <code>import &#123; ProductCard, ProductList &#125; from './NamedExportExample';</code></p>
                    <p><em>Note: You must use the exact export names in curly braces</em></p>

                    <ProductList products={sampleProducts} />

                    <div style={{
                        marginTop: '15px',
                        padding: '10px',
                        backgroundColor: '#fffde7',
                        borderRadius: '5px'
                    }}>
                        <p><strong>Using exported constants & functions:</strong></p>
                        <p>Subtotal: ${total.toFixed(2)}</p>
                        <p>Tax Rate: {(TAX_RATE * 100).toFixed(0)}%</p>
                        <p>Total with Tax: ${totalWithTax.toFixed(2)}</p>
                    </div>
                </div>
            </section>

            {/* Section 3: Mixed Exports Demo */}
            <section style={{ marginTop: '30px' }}>
                <h2 style={{ color: '#388e3c' }}>3. Mixed Exports Example (Default + Named)</h2>
                <div style={{
                    padding: '15px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <p><strong>File:</strong> MixedExportExample.js</p>
                    <p><strong>Exports:</strong> <code>export default BookCard;</code> +
                        <code> export function BookRating &#123;...&#125;</code></p>
                    <p><strong>Import:</strong> <code>import BookCard, &#123; BookRating, GENRES &#125; from './MixedExportExample';</code></p>
                    <p><em>Note: Default export comes first (no curly braces), then named exports in curly braces</em></p>

                    <BookCard
                        title="The Great Gatsby"
                        author={formatAuthor("F. Scott", "Fitzgerald")}
                        genre={GENRES[0]}
                        rating={5}
                        year={1925}
                    />

                    <BookCard
                        title="1984"
                        author={formatAuthor("George", "Orwell")}
                        genre={GENRES[0]}
                        rating={5}
                        year={1949}
                    />

                    <div style={{
                        marginTop: '15px',
                        padding: '10px',
                        backgroundColor: '#f1f8e9',
                        borderRadius: '5px'
                    }}>
                        <p><strong>Available Genres (from named export):</strong></p>
                        <p>{GENRES.join(', ')}</p>
                    </div>
                </div>
            </section>

            {/* Summary */}
            <section style={{ marginTop: '30px' }}>
                <h2 style={{ color: '#d32f2f' }}>Quick Reference Guide</h2>
                <div style={{
                    padding: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#e0e0e0' }}>
                                <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>Export Type</th>
                                <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>Export Syntax</th>
                                <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>Import Syntax</th>
                                <th style={{ padding: '10px', border: '1px solid #ccc', textAlign: 'left' }}>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>Default</td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    <code>export default Component;</code>
                                </td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    <code>import Component from './file';</code>
                                </td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    Only 1 per file. Can import with any name.
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>Named</td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    <code>export function Component() &#123;&#125;</code>
                                </td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    <code>import &#123; Component &#125; from './file';</code>
                                </td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    Multiple per file. Must use exact name.
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>Named (Alias)</td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    <code>export function Component() &#123;&#125;</code>
                                </td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    <code>import &#123; Component as C &#125; from './file';</code>
                                </td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    Rename on import using 'as'.
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>Mixed</td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    <code>export default A; export const B = ...;</code>
                                </td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    <code>import A, &#123; B &#125; from './file';</code>
                                </td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    1 default + multiple named.
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>All as Namespace</td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    <code>export default A; export const B = ...;</code>
                                </td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    <code>import * as All from './file';</code>
                                </td>
                                <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                    Use All.default, All.B
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default ExportImportDemo;

