import { useContext } from "react";
import BookContext from "../../contexts/BookContext";


function EditForm({ bookId, onSubmit }) {

    const { handleEditBookName, editBook, state } = useContext(BookContext)

    const handleChange = (e) => {
        handleEditBookName(e.target.value)
    }

    const handleSubmit = (e, bookId) => {
        e.preventDefault();
        editBook(bookId, state.editBookName)
        onSubmit();
    }

    return (
        <div className="py-3">
            <form onSubmit={(e) => handleSubmit(e, bookId)}>
                <input
                    className="block w-full text-sm text-slate-500 px-3 py-2 border border-cyan-500 rounded focus:bg-cyan-100 focus:outline-0"
                    type="text"
                    onChange={handleChange}
                    value={state.editBookName}
                />
                <div className="my-3">
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-100 py-1 px-2 text-sm uppercase rounded">Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditForm;