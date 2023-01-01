import { createContext, useMemo, useReducer } from "react";
import axios from 'axios'

const BookContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'handle-change-book-name':
            return { ...state, createBookName: action.payload }
        case 'handle-edit-book-name':
            return { ...state, editBookName: action.payload }
        case 'fetch-books':
            return { ...state, books: action.payload }
        case 'create-book':
            return { ...state, books: action.payload, createBookName: '' }
        case 'delete-book':
            return { ...state, books: action.payload }
        case 'edit-book':
            return { ...state, books: action.payload }
        default:
            return state
    }
}

const initialState = {
    createBookName: '',
    editBookName: '',
    books: []
}

const BookProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');
        dispatch({ type: 'fetch-books', payload: response.data });
    }

    useMemo(() => {
        fetchBooks();
    }, [])

    const handleChangeBookName = (bookName) => {
        dispatch({ type: 'handle-change-book-name', payload: bookName })
    }
    const handleEditBookName = (bookName) => {
        dispatch({ type: 'handle-edit-book-name', payload: bookName })
    }

    const createBook = async () => {
        const response = await axios.post('http://localhost:3001/books', { name: state.createBookName });

        const updatedBooks = [
            ...state.books,
            response.data
        ]

        dispatch({ type: 'create-book', payload: updatedBooks })
    }

    const editBook = async (id, name) => {
        await axios.put(`http://localhost:3001/books/${id}`,
            { name }
        )

        const updatedBooks = state.books.map(book => {
            if (book.id === id) {
                return { ...book, name }
            }

            return book;
        })

        dispatch({ type: 'edit-book', payload: updatedBooks })
    }

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks = state.books.filter(book => book.id !== id)

        dispatch({ type: 'delete-book', payload: updatedBooks })
    }

    const BookFunctionality = {
        handleChangeBookName,
        handleEditBookName,
        createBook,
        editBook,
        deleteBook,
        state
    }

    return (
        <BookContext.Provider value={BookFunctionality}>
            {children}
        </BookContext.Provider>
    )
}

export { BookProvider }

export default BookContext;