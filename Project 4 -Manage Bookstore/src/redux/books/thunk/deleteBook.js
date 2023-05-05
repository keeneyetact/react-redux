import { deleted } from "../actions";

const deleteBook = (bookId) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${bookId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const book = await response.json();

        dispatch(deleted(bookId));
    };
};

export default deleteBook;