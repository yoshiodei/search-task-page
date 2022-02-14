const Error = () => {
    return (
        <div className='main__error-div'>
            <div>
                <h2 className='main__error-div__h2'>
                    Network Error:
                </h2>
                <h4 className='main__error-div__h4'>
                    Try checking your connection and reload page.
                </h4>
                <button className='main__error-div__btn' onClick={ ()=> window.location.reload()  }>Reload</button>
            </div>
        </div>
    );
}

export default Error;
