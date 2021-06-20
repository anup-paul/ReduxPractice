import React from "react";
import {Link, useHistory} from "react-router-dom";

const Countries = (props) => {

    const history = useHistory();
    const handleClick = (id) => {

        history.push(`/country/${id}`);
        // console.log("Clicked", id);
    }

    return(
        <>
            <div className="col-md-4">
                <div className="card m-3 border border-3 shadow p-3 mb-5 bg-body rounded " style={{width: "18rem"}}>
                    <img src={props.country.flag} className="card-img-top p-3 " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{props.country.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk of the card's content.</p>
                            <Link onClick = {()=>handleClick(props.country.numericCode)} className="btn btn-outline-success">Country Info</Link>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Countries;