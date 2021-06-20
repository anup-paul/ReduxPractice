import React from "react";
import {addToReadingList, removeFromReadingList} from "../../Redux/Actions/BookAction";
import {useDispatch} from "react-redux";

const ReadingListBooks = (props) => {

    const dispatch = useDispatch()

    return(
        <>
            <div className="col-md-4" >
                <div className="card p-3" style={{width: "18rem"}}>
                    <img src={props.book.imageURL} className="card-img-top h-50" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.book.bookName}</h5>
                        <h5 className="card-title"> Author Name: {props.book.authorName}</h5>
                        <button onClick={()=>dispatch(removeFromReadingList(props.book))}   className="btn btn-primary">Remove From ReadingList</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReadingListBooks;