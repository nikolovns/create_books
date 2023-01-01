// import axios from "axios";
import { useContext } from "react";

import BookContext from "../../contexts/BookContext";

function CreateBook() {

    const { handleChangeBookName, createBook, state } = useContext(BookContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createBook();
        handleChangeBookName('')
    }

    const handleChange = (e) => {
        handleChangeBookName(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Book Name:</label>
            </div>
            <div>
                <input
                    className="px-3 py-2 border border-cyan-500 rounded focus:bg-cyan-100 focus:outline-0"
                    type="text"
                    onChange={handleChange}
                    value={state.createBookName}
                />
            </div>
            <div>
                <button className="my-3 bg-cyan-500 hover:bg-cyan-600 text-slate-100 py-1 px-2 text-lg uppercase rounded">Save</button>
            </div>
        </form>
    )
}

export default CreateBook;