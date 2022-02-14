const initialState = {
    loading: true,
    data: [],
    filteredData: [],
    orderData: [],
    error: false,
    category: "Loading",
    order: "Default",
    date: "Default",
    search: "",
    page: 1
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ALL_TEMPLATES': return {...state, data:[...action.payload] };
        case 'SET_ERROR_FLAG': return {...state, loading: false, error: true, category:"Error Loading"};
        case 'SET_FLAGS': return {...state, loading: false, error: false, category:"All"};
        case 'CHANGE_CATEGORY': return {...state,category:action.payload, order: "Default", date: "Default", search: ""};
        case 'CHANGE_SEARCH': return {...state, search: action.payload};
        case 'CHANGE_ORDER': return {...state, order: action.payload, date: "Default"};
        case 'CHANGE_DATE': return {...state, date: action.payload, order: "Default"};
        case 'PREV_PAGE': return {...state, page: --state.page};
        case 'UPDATE_ORDER': return { ...state, orderData:[...action.payload] }
        case 'NEXT_PAGE': return {...state, page: ++state.page};
        case 'SET_PAGE': return {...state, page: action.payload};
        case 'UPDATE_STATE': return {...state, filteredData:[...action.payload]}
        case 'GET_DATA': return state;
        default: return state;
    }
}

export default rootReducer;