import { useEffect, useState } from "react"
import { Link } from "react-router";

export const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {

        fetch('https://seussology.info/api/books')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div className="container">
            <h2>Books</h2>
            <div className="book-list">
                {books.map(book => (
                    <div key={book.id} className="book-item">
                        <Link to={`/book/${book.id}`}>
                            <img src={book.image} alt={book.title} />
                        </Link>
                        <h3>{book.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
