import React from 'react';
import './ErrorPage.scss';

function ErrorPage() {

    return (
        <div className="error-page">
            <a href="/">
            <div class="wrapper" >
                <div class="container" data-text="404">
                    <div class="title glitch" data-text="404">
                        404
                    </div>
                    <div class="description glitch" data-text="PAGE NOT FOUND">
                        Page not found!
                    </div>
                </div>
            </div>
            </a>

        </div>
    )
}

export default ErrorPage;