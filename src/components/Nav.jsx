import './../styles/nav.css';
import { connect } from 'react-redux';
import { changeDate, changeOrder, changeSearch, changeCategory } from '../redux/actions/action';

const Nav = ({state, changeDate, changeOrder, changeCategory, changeSearch}) => {

    console.log('map state:', state);

    const handleSearch = (e) => {
        changeSearch(e.target.value);
    }

    const handleChangeOrder = (e) =>{
        changeOrder(e.target.value);
    }

    const handleChangeDate = (e) =>{
        changeDate(e.target.value);
    }

    const handleChange = (e) => {
        changeCategory(e.target.value);
    }

    return (
        <nav id="top">
            <form className='form'>
            
                <div className='form__input-div'>
                    <input 
                        autoComplete='off'
                        placeholder='Search Templates' 
                        name="search" 
                        className='form__input-div__input'
                        value={state.search}
                        onChange={handleSearch}
                        data-testid="searchBar"
                    />
                    <i class="bi bi-search form__input-div__custom-icon" ></i>
                </div>
                <div className='form__select-div'>
                    <h5 className='form__select-div__header'>Sort By: </h5>
                    <div className='form__select-div__inner-div'>
                        <select className='form__select-div__select' value={state.category} onChange={handleChange}>
                            <option value="All" >All</option>
                            <option value="Education" >Education</option>
                            <option value="E-commerce" >E-commerce</option>
                            <option value="Health" >Health</option>
                        </select>
                        <label className='form__select-div__inner-div__label'>Category</label>
                    </div>
                    <div className='form__select-div__inner-div'>
                        <select className='form__select-div__select' value={state.order} onChange={handleChangeOrder}>
                            <option value="Default">Default</option>
                            <option value="Ascending">Ascending</option>
                            <option value="Descending">Descending</option>
                        </select>
                        <label className='form__select-div__inner-div__label'>Order</label>
                    </div>
                    <div className='form__select-div__inner-div'>
                        <select className='form__select-div__select' value={state.date} onChange={handleChangeDate}>
                            <option value="Default">Default</option>
                            <option value="Ascending">Ascending</option>
                            <option value="Descending">Descending</option>
                        </select>
                        <label className='form__select-div__inner-div__label'>Date</label>
                    </div>
                </div>
            </form>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = { changeDate, changeOrder, changeSearch, changeCategory }

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
