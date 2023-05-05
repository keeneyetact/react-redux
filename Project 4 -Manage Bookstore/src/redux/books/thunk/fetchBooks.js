import { loaded } from "../actions";

const fetchBooks = async (dispatch) => {
    const response = await fetch("http://localhost:9000/books");
    const todos = await response.json();

    dispatch(loaded(todos));
};

export default fetchBooks;