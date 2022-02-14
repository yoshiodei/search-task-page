import loader from './../images/loader.gif'

const Loading = () => {
    return (
        <div className='main__loading-div'>
            <img src={loader} alt="loader" className='main__loading-div__img' />
        </div>
    );
}

export default Loading;
