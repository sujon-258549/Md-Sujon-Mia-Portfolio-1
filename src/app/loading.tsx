import React from 'react';
import Loading from './components/loading/Loading';

const loading = () => {
    return (
        <div className='bg-slate-500 h-full w-full'>
            <Loading/>
        </div>
    );
};

export default loading;