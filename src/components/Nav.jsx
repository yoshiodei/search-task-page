import './../styles/nav.css';

const Nav = () => {
    return (
        <nav>
            <form className='form'>
                <input 
                    placeholder='Search Templates' 
                    name="search" 
                    className='form__search-input'
                />

                <div className='form__div'>
                    <h3 className='form__header'>Sort By:</h3>
                    <select className='form__select'>
                        <option>All</option>
                    </select>
                    <select className='form__select'>
                        <option>Default</option>
                    </select>
                    <select className='form__select'>
                        <option>Default</option>
                    </select>
                </div>
            </form>
        </nav>
    );
}

export default Nav;
