import CreateBook from "./CreateBook";
import { useContext } from "react";
import BookContext from "../../contexts/BookContext";
import BookItems from "./BookItems";

function BookList() {
    const { state } = useContext(BookContext);

    const showBookItems = state.books.map(book => {
        return < BookItems key={book.id} book={book} />
    })

    return (
        <div className="container mx-auto px-5 pt-8">
            <div className="gap-8 grid grid-cols-3 max-w-full">
                {showBookItems}
            </div>
            <div className="clear-both mt-5">
                <CreateBook />
            </div>

        </div>
    )
}

export default BookList;