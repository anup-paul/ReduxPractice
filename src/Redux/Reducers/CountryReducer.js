
const initialState = {
    countryList:[]
}

const CountryReducer = (state = initialState, action) => {
    switch (action.type){
        case 'Load_COUNRIES':{
            const newState = {
                ...state,
                countryList: action.payload
            }
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default CountryReducer;