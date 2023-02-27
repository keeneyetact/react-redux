import { LOADED, ADDED, UPDATED, DELETED } from "./actionTypes";

const initialState = [{
    "name": "Slow Horses (Deluxe Edition)",
    "author": "Mick Herron",
    "thumbnail": "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg",
    "price": 14,
    "rating": 3,
    "featured": false,
    "id": 1
  },
  {
    "name": "The Last Thing He Told Me: A Novel",
    "author": "Laura Dave",
    "thumbnail": "https://m.media-amazon.com/images/P/1501171348.01._SCLZZZZZZZ_SX500_.jpg",
    "price": 13.99,
    "rating": 4,
    "featured": false,
    "id": 2
  },
  {
    "name": "Eloquent JavaScript, 3rd Edition",
    "author": "Marijn Haverbeke",
    "thumbnail": "https://m.media-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
    "price": 23.99,
    "rating": 5,
    "featured": true,
    "id": 4
  }]

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return state
        case ADDED:
            return [...state, action.payload]
        case UPDATED:
            const {bookId, updatedBook} = action.payload;
            return state.map((book) => {
                if (book.id !== bookId) {
                    return book;
                }
                return {
                    updatedBook
                };
            });

        case DELETED:
            return state.filter((book) => book.id !== action.payload);
    
        default:
            return state;
    }
}

export default bookReducer