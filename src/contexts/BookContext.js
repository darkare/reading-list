import React, {createContext, useState} from 'react';
import uuid from 'uuid/v1';

export const BookContext  = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title:'noame of the wind', author: 'patrick r', id:1},
        {title:'the final empire', author: 'bramdon', id:2}
    ]);

    const addBook = (title, author)  => {
        setBooks([...books, {title, author, id:uuid()}]);
    };

    const removeBook = (id) => {
        setBooks(books.filter((b) => b.id !== id));
    };

    return (
        <BookContext.Provider value= {{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>

    );
}

export default BookContextProvider;