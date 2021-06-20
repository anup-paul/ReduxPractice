const initialState = {
    DiscoverList : [],
    ReadingList : [],
    RemoveList : []
}

const BookReducer = (state = initialState, action) => {
    switch (action.type){
        case 'LOAD_BOOKS':{
            const newState = {
                ...state,
                DiscoverList: action.payload
            }
            return newState;
        }
        case 'ADD_TO_READING_LIST':{
            const newState = {
                ...state,
                ReadingList:[ ...state.ReadingList, action.payload]
            }
            return newState
        }
        default:{
            return state;
        }
        case 'REMOVE_FROM_READING_LIST':{
            const newState = {
                ...state,
                ReadingList:state.ReadingList.filter((book) => book._id != action.payload._id)
            };
            return newState;
        }
    }
}

export default BookReducer;