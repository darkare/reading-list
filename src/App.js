import React from 'react';
import './App.css';
import BookContextProvider from './contexts/BookContext';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';
import TableExample from './components/TableExample';
function App() {
  return (
    <div className="App">
      
        <BookContextProvider>
          <NavBar />
          <BookList />
          <NewBookForm />
          <TableExample />
        </BookContextProvider>
        SECRET: {process.env.REACT_APP_NOT_SECRET_CODE}  <br />
        NODE ENV: {process.env.NODE_ENV}
   </div>
  );
}

export default App;
