import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadCountries} from "../../Redux/Actions/CountryAction";

const Home = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadCountries())
    }, [])

    const countries = useSelector((state => {
        console.log(state.countries.countryList);
        return state.countries.countryList;
    }))

    return(
        <>
           <h2>Total Countris : {countries.length}</h2>
            {
                countries.map(country => <li>{country.name}</li>)
            }
        </>
    )
}
export default Home;