// tab 2 JS test// 
import React from 'react'; 
import { HashLink as Link} from 'react-router-hash-link';
<div>
    <Link to="Minter#MyWallet"> My Wallet </Link> 


</div>


export const Header = (props) => {
<nav className ='navbar navbar-default'>
      <div className ='container'>
        <div className = "navbar_header">
          <ul className="nav navbar-nav">
            <li><Link to={"/MyWallet"}> My Wallet</Link></li> 
          </ul>
        </div>
      </div>
    </nav>
    );
};