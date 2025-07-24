
import App from "../App.jsx";
import { Books } from "../routes/Books.jsx";
import { Book } from "../routes/Book.jsx";
import { Quotes } from "../routes/Quotes.jsx";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Books />
            },
            {
                path: '/book/:id',
                element: <Book />
            },
            {
                path: '/quotes',
                element: <Quotes />
            }
        ]
    },


]);

export default router;