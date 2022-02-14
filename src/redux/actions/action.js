import endPoint from "../../config/endPoints";
import Axios from 'axios';

export const changeOrder = (order) => {
    return {
        type: 'CHANGE_ORDER', 
        payload: order
    }
} 

export const changeDate = (date) => {
    return {
        type: 'CHANGE_DATE', 
        payload: date
    }
} 

export const changeCategory = (category) => {
    return {
        type: 'CHANGE_CATEGORY',
        payload: category
    }
}

export const nextPage = () => {
    return {
        type: 'NEXT_PAGE',
    }
}

export const setPage = (page) => {
    return {
        type: 'SET_PAGE',
        payload: page
    }
}

export const prevPage = () => {
    return {
        type: 'PREV_PAGE',
    }
}

export const changeSearch = (search) => {
    return {
        type: 'CHANGE_SEARCH',
        payload: search
    }
}

const setFlags = () => {
    return {
        type: 'SET_FLAGS'
    }
}

const setErrorFlag = () => {
    return {
        type: 'SET_ERROR_FLAG'
    }
}

const getAllTemplates = (templates) => {
    return {
        type: 'GET_ALL_TEMPLATES',
        payload: templates
    }
}

export const updateState = (data) => {
    return {
        type: 'UPDATE_STATE',
        payload: data
    }
}

export const updateOrder = (data) => {
    return {
        type: 'UPDATE_ORDER',
        payload: data
    }
}


export const getData = () => {
    return (dispatch)=>{

        Axios.get(endPoint())
        .then((response) => dispatch(getAllTemplates(response.data)))
        .then(()=> {
          dispatch(setFlags());
        })
        .catch(error =>{
          if(error == "Error: Network Error"){
            dispatch(setErrorFlag());  
        }
        }
        )
    }
} 