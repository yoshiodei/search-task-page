import './../styles/main.css';
import { useEffect, useState } from 'react';
import Card from './Card';
import Loading from './Loading';
import Error from './Error';
import Emptylist from './EmptyList';
import { connect } from 'react-redux';
import { nextPage, prevPage, setPage, updateState, updateOrder} from '../redux/actions/action';

const Main = ({state, nextPage, prevPage, setPage , updateState, updateOrder}) => {

    let itemsPerPage = 30;
    let obj = [];
    let data = [];

    const handlePrevPage = () => {
        if(state.page > 1){
            prevPage();
        } 
    }

    const handleChangePage = (e) =>{
        let number = e.target.value;
        if( Number(number) && number >= 1 && number <= totalPage) 
        setPage(number);
        else setPage(1);

    }

    const handleNextPage = () => {
        if(state.page < totalPage){
            nextPage();
        } 
    }

    useEffect(() => {
        // This Statement handles the category filter
        switch(state.category){
            case 'Education':
                obj = state.data.filter(item => item?.category.includes('Education'));
                updateState(obj);
                updateOrder(obj);
                break;
            case 'E-commerce': 
                obj = state.data.filter(item => item?.category.includes('E-commerce'));
                updateState(obj);
                updateOrder(obj);
                break;
            case 'Health': 
                obj = state.data.filter(item => item?.category.includes('Health'));
                updateState(obj);
                updateOrder(obj);
                break;
            default: 
                 obj = state.data;
                 updateOrder(obj);
                 updateState(obj);
                break;
        }
    }, [state.category]);

    useEffect(() => {
    // This Statement handles the date & order filter
    if(state.order === 'Default'){
            switch(state.date){
            case 'Ascending':
                obj = state.filteredData.concat().sort((a, b) => a.created.localeCompare(b.created));     
                updateOrder(obj);
                break;
            case 'Descending': 
                obj = state.filteredData.concat().sort((a, b) => a.created.localeCompare(b.created)).reverse();
                updateOrder(obj);
                break;
            default:
                obj = state.data;
                updateOrder(obj);
                break;
        }
    }
    else {
            switch(state.order){
            case 'Ascending':
                obj = state.filteredData.concat().sort((a, b) => a.name.localeCompare(b.name));     
                updateOrder(obj);
                break;
            case 'Descending': 
                    obj = state.filteredData.concat().sort((a, b) => a.name.localeCompare(b.name)).reverse();
                    updateOrder(obj);
                break;
            default:
                
                break;
            }
     }
    }, [state.date, state.order]);

     
    data = state.orderData.filter(item=> item?.name.includes(state.search)).slice((itemsPerPage*(state.page-1)),(itemsPerPage*state.page))
    console.log("orderData here",data)
    let totalPage = Math.ceil(state.filteredData.filter(item=> item?.name.includes(state.search)).length / itemsPerPage);

    return (
        <main className='main'>
            <div className='main__header-div'>
                <h3 className='main__header-div__h3'>{state.category} Templates</h3>
                <h5 className='main__header-div__h6'>{ `${state.data.length} templates` }</h5>
            </div>
            {   data.length > 0 && !state.error && !state.loading &&
                (<div className='main__card-list'>
                    { data.map((template, index)=>(
                        <Card template={template} key={index} />
                      ))
                    }
                </div> )
            }
            {
                data.length == 0 && !state.error && !state.loading &&
                (
                    <Emptylist />
                )
            }
            {
                !state.error && state.loading && 
                (
                    <Loading />
                )
            }
            {
                state.error && !state.loading && 
                (
                    <Error />
                )
            }
            {
                data.length > 0 && !state.error && !state.loading &&
                (
                    <div className='main__footer'>
                        <div className='main__footer__div main__footer__div--navigation' onClick={handlePrevPage} >
                            { state.page == 1 ? null : <i class="fa-solid fa-chevron-left main__footer__icon"></i> }
                            <p className='main__footer__text'>Previous</p>
                        </div>
                        <div className='main__footer__div'>
                            <input className='main__footer__input' value={state.page} onChange={handleChangePage}/>
                            <p className='main__footer__text'>of {totalPage}</p>
                        </div>
                        <div className='main__footer__div main__footer__div--navigation' onClick={handleNextPage} >
                            <p className='main__footer__text'>Next</p>
                            { state.page == totalPage ? null : <i class="fa-solid fa-chevron-right main__footer__icon"></i> }
                        </div>
                    </div>
                )
            }
            {
                data.length > 0 && !state.error && !state.loading &&
                (
            <a href="#top" className='main__to-top-btn'>Move to top</a>
            )
            }
        </main>
    );
}

const mapStateToProps = (state) =>{
    return{
        state
    }
}

const mapDispatchToProps = { nextPage, prevPage, setPage, updateState, updateOrder }

export default connect(mapStateToProps, mapDispatchToProps)(Main);
