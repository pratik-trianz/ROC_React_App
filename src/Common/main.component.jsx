import React, {Component} from 'react';
import { Link } from 'react-router';

class Main extends Component {
    render(){
        return(
            <div>
          <header id="header">
            <div className="container">
                <div className="menu" >
                    <div id="logo" className="pull-left">
                        <a href="#studio"><img src="icons/logo.png" alt="" title="" /></a>
                    </div>
                <nav id="nav-menu" className="pull-right">
                    <ul className="nav-menu">
                        <li className="homelink"><Link to="/" activeClassName="menu-active">HOME</Link></li>
                        <li className="productlink"><Link to="/products" activeClassName="menu-active">PRODUCTS</Link></li>
                        <li className="lenderslink"><Link to="/lendor" activeClassName="menu-active">LENDERS</Link></li>
                        <li className="investorslink"><Link to="/investor" activeClassName="menu-active">INVESTORS</Link></li>
                        <li className="borrowlink"><Link to="/borrower" activeClassName="menu-active">BORROWERS</Link></li>
                        <li className="technologylink"><Link to="/trade" activeClassName="menu-active">TRADE</Link></li>
                        <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
                <div className="">
                    {this.props.children}
                </div>
        <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright">
                                (212) 607-8333 | 40 W 57th St, New York, NY 10019, USA | Â© 2016 by Roc Capital
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        );
    }
}

export default Main
