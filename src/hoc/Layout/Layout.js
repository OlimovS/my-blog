import React, {Component} from 'react';
import { connect } from 'react-redux';

import Auxi from '../Auxi/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './Layout.css';

class Layout extends Component {
  render(){
    return (
      <Auxi>
       <Toolbar isAuth={this.props.isAuthenticated}/>
         <main className="my-content">
            {this.props.children}
         </main>
      </Auxi>
    );
  }
}

const mapStateToProps = state => {
   return {
     isAuthenticated: state.auth.token !== null
   }
}


export default connect(mapStateToProps)(Layout);
