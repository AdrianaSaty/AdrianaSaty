import React, { Component } from 'react';
import('./Navbar.css');

class Navbar extends Component {

    onClickFuncs = (event) => {
        this.props.logout();
        event.preventDefault();
    }

    async componentDidMount() {

    }

    render() {
        return (
            <div className="d-flex justify-content-between">
                    <div>
                        <ul className="">
                            <li>
                                <a className="title3 p-2 d-flex" href='/wallet'>
                                    Your Balance: 
                                </a>
                            </li>
                        </ul>
                    </div>
                }
                <div className="d-flex justify-content-end">
                    {this.props.route === 'home' || this.props.route === 'wallet' ? (
                        <ul className="">
                            <li><a className="title3 p-2" href='/home' >Make a Bet</a></li>
                            <li><a className="title3 p-2" href='/wallet' >Wallet</a></li>
                            <li><a className="title3 p-2" onClick={(event) => this.onClickFuncs(event)} href='/' >Logout</a></li>
                        </ul>
                    ) : (
                            <ul className="">
                                {/* <li><Link className="title3" to="/login">Login</Link></li> */}
                                <li><a className="title3" href="/signup">Sign Up</a></li>
                            </ul>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Navbar;