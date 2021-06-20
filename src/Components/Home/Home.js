import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadCountries} from "../../Redux/Actions/CountryAction";
import Countries from "../Countries/Countries";

const Home = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadCountries())
    }, [])

    const countries = useSelector((state => {
        // console.log(state.countries.countryList);
        return state.countries.countryList;
    }))

    return(
        <>
           <div className="d-flex justify-content-center" >
               <div className="row w-75" >
                   <h2 className="text-center mb-5 " >Total Countries : {countries.length}</h2>
                   {
                       countries.length === 0 &&
                       <button className="btn btn-primary" type="button" disabled>
                           <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                           Loading...
                       </button>
                   }
                   {
                       countries?.map(country => <Countries key={country.numericCode} country = {country} ></Countries>)
                   }
               </div>
           </div>
        </>
    )
}
export default Home;