import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import './Scores.css';
import * as actions from '../../../store/actions/index';
import Spinner from '../../UI/Spinner/Spinner';
import Score from './Score/Score';

class Scores extends Component {
  componentDidMount () {
    this.props.onFetchScores(this.props.token, this.props.userId);
  }
   render(){
     let scores = (
       <Fragment>
       <h3>Your Scores</h3>
       {this.props.scores.map(obj => {
         return <Score key={obj.id} score={obj.score} time={obj.time} date={obj.date}/>
       })}
       </Fragment>

     );
     if(this.props.loading){
       scores = (
         <div style={{height: '28vh', paddingTop: "30px"}}>
          <Spinner />
         </div>
       );
     }
     if(this.props.error){
       scores = (
         <div style={{height: '20vh'}}>
         <h5 style={{color: "red", marginTop: "40px"}}>Error: {this.props.error}</h5>
         </div>
       );
     }else if(!this.props.loading && typeof this.props.scores[0] === "undefined"){
       scores = (
         <div style={{height: '20vh'}}>
         <h5 style={{color: "#e67e22", marginTop: "40px"}}>You have not played Game !</h5>
         </div>
       );
     }
     return(
       <div className="Section-Scores">
       {scores}
       </div>

     );
   }
}


const mapDispatchToProps = dispatch => {
   return {
     onFetchScores: (token, userId) => dispatch(actions.fetchScores(token, userId))
   }
}

const mapStateToProps = state => {
   return {
     scores: state.score.scores,
     loading: state.score.loading,
     error: state.score.error,
     token: state.auth.token,
     userId: state.auth.userId
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores);
