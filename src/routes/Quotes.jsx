import { useEffect, useState } from "react"

export const Quotes = () => {

    const [Quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch('https://seussology.info/api/quotes/random/10')
            .then(response => response.json())
            .then(data => setQuotes(data));
    }, [])

    if (Quotes.length === 0) {
        return <div className="container"><h1>Loading...</h1></div>
    }

    return (
        <>
            <div className="container">
                <h2>Quotes</h2>
                <div className="quotes-list">
                    {Quotes.map(quote => (
                        <div key={quote.id}>
                            <blockquote>
                                <p>{quote.text}</p>
                                <footer>{quote.book.title}</footer>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
