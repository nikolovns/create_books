import BookContext from "../../contexts/BookContext"
import { useContext, useState } from "react"
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import EditForm from "./EditForm";

function BookItems({ book }) {

    const { name } = book;

    const { deleteBook, handleEditBookName } = useContext(BookContext)

    const [showEdit, setShowEdit] = useState(false)

    const handleDelete = (id) => {
        deleteBook(id)
    }

    const handleEdit = () => {
        setShowEdit(!showEdit);
        handleEditBookName(name);
    }

    return (
        <div className="border border-cyan-500 rounded text-xs float-left w-full p-3">
            <div className="flex flex-row justify-end items-center -mx-2">
                <i
                    onClick={() => handleDelete(book.id)}
                    className="text-xl cursor-pointer mx-2 text-red-400 hover:text-red-600">
                    <AiFillDelete />
                </i>
                <i
                    onClick={() => handleEdit(book.id, book.createBookName)}
                    className="text-xl cursor-pointer mx-2 text-cyan-500 hover:text-cyan-600">
                    <AiFillEdit />
                </i>
            </div>

            <div className="image-container mt-3">
                <img src={`http://picsum.photos/seed/${book.id}/300/200`} alt="image" />
            </div>

            {
                showEdit ?
                    <EditForm
                        bookId={book.id}
                        onSubmit={handleEdit}
                    /> :
                    <h2 className="my-2 text-xl">{name}</h2>
            }
        </div>
    )
}

export default BookItems;