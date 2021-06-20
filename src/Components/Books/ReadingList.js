import React from "react";
import {useSelector} from "react-redux";
import ReadingListBooks from "./ReadingListBooks";
import BookList from "./BookList";

const ReadingList = () => {

    const readingList = useSelector((state => {
        console.log(state.books.ReadingList);
        return state.books.ReadingList;
    }))


    return(
        <>
            <div className="d-flex justify-content-center" >
                <div className="row w-75 " >
                    {
                        readingList.map(book => <ReadingListBooks key = {readingList._id} book = {book} ></ReadingListBooks>)
                    }
                </div>
            </div>
        </>
    )
}
export default ReadingList;