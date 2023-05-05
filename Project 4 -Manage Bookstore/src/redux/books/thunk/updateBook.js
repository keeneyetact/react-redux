import { updated } from "../actions";

const updateBook = (bookId, bookData) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${bookId}`, {
            method: "PATCH",
            body: JSON.stringify(bookData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const book = await response.json();

        dispatch(updated(book.id, book));
    };
};

export default updateBook;