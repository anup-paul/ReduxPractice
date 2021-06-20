import React from "react";
import { useParams } from 'react-router';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const CountryInfo  = () =>{

    const {id} = useParams()
     // console.log(id);

    const countries = useSelector((state => {
         // console.log(state.countries.countryList);
        return state.countries.countryList;
    }))

    const country = countries.find(data => data.numericCode === id)
     console.log(country);

    return(
        <>
           <div className="d-flex justify-content-center" >
               <div className="row" >
                   <div className="col-md-4">
                       <div className="card m-3 border border-3 shadow p-3 mb-5 bg-body rounded " style={{width: "18rem"}}>
                           <img src={country.flag} className="card-img-top p-3 " alt="..."/>
                           <div className="card-body">
                               <h5 className="card-title">{country.name}</h5>
                               <h5 className="card-title">Native Name : {country.nativeName}</h5>
                               <h5> Population: {country.population}</h5>
                               <h5> Region:{country.region} </h5>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}
export default CountryInfo;