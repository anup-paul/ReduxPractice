
export const loadCountries = () => {
    return (dispatch, getState) => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                dispatch({
                    type:"Load_COUNRIES",
                    payload:data
                })
            })
    }

}

export const countyInfo = (payload) => {
    return{
        type:"COUNTRY_INFO",
        payload
    }
}