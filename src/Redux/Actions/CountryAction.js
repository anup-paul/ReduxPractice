
export const loadCountries = (payload) => {
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