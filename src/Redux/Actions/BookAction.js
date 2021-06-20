
export const loadBooks = () => {
    return(dispatch, getState) => {
        fetch('https://limitless-shelf-16314.herokuapp.com/books')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'LOAD_BOOKS',
                    payload:data
                })
            })
    }
}

export const addToReadingList = (payload) => {
    return{
        type:'ADD_TO_READING_LIST',
        payload

    }
}

export const removeFromReadingList = (payload) => {
    return {
        type:'REMOVE_FROM_READING_LIST',
        payload
    }
}