import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadBooks} from "../../Redux/Actions/BookAction";
import BookList from "./BookList";
import {Link} from "react-router-dom";


const Books = () => {

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(loadBooks())
    }, [])

    const books = useSelector((state => {
        // console.log(state.books.DiscoverList);
        return state.books.DiscoverList;
    }))

    const readingList = useSelector((state => {
        // console.log(state.books.DiscoverList);
        return state.books.ReadingList;
    }))

    return(
        <>

                <div className="row" >
                    {
                        books.length === 0 &&
                        <button className="btn btn-primary " type="button" disabled>
                            <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    }
                    <div className="col-md-3 border h-50 text-center p-5 "   >
                            <Link to="/readingList" className="btn btn-primary m-3" >
                                ReadingList :
                                <span> {readingList.length}</span>
                            </Link>
                            <br/>

                    </div>
                    <div className="col-md-9">

                           <div className="row " >

                               {
                                   books.map(book => <BookList key = {books._id} book = {book} ></BookList>)
                               }
                           </div>
                       </div>

                </div>

        </>
    )
}
export default Books;