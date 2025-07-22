import { useEffect, useState } from "react";
import { useParams } from "react-router";

// Book component to display individual book details
export const Book = () => {
    const [book, setBook] = useState(null);
    const { id } = useParams();

    const bookDataUrl = `https://seussology.info/api/books/${id}`;

    useEffect(() => {
        fetch(bookDataUrl)
            .then((response) => response.json())
            .then((data) => setBook(data));
    }, []);

    return (
        <>
            <div className="container">
                {/* if book is not loaded yet, show loading message */}
                {!book ? (
                    <p>Loading...</p>
                ) : (
                    <div className="book-info-grid">
                        <div className="book-info">
                            <h1>{book.title}</h1>
                            <p>{book.description}</p>
                        </div>
                        <img
                            className="book-image"
                            src={book.image}
                            alt={book.title}
                        />
                    </div>
                )}
            </div>
        </>
    );
};
