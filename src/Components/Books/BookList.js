import React from "react";
import {useDispatch} from "react-redux";
import {addToReadingList} from "../../Redux/Actions/BookAction";

const BookList = (props) => {

    const dispatch = useDispatch()

    return(
        <>
            <div className="col-md-4" >
                <div className="card p-3" style={{width: "18rem"}}>
                    <img src={props.book.imageURL} className="card-img-top h-50" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.book.bookName}</h5>
                        <h5 className="card-title"> Author Name: {props.book.authorName}</h5>
                        <button onClick={()=>dispatch(addToReadingList(props.book))}  className="btn btn-primary">Add To ReadingList</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BookList;