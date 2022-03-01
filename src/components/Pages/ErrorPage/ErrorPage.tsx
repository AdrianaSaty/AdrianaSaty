import React from 'react';
import './ErrorPage.scss';

function ErrorPage() {

    return (
        <div className='error-page'>
            <a href='/'>
            <div className='wrapper' >
                <div className='container' data-text='404'>
                    <div className='title glitch' data-text='404'>
                        404
                    </div>
                    <div className='description glitch' data-text='PAGE NOT FOUND'>
                        Page not found!
                    </div>
                </div>
            </div>
            </a>

        </div>
    )
}

export default ErrorPage;