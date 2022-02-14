import React from 'react';

const Emptylist = () => {
    return (
        <div className='main__empty-div'>
            <div>
                <h2 className='main__empty-div__h2'>
                    Not Found:
                </h2>
                <h4 className='main__empty-div__h4'>
                    Search result did not return any template.
                </h4>
            </div>
        </div>
    );
}

export default Emptylist;
