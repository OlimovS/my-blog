import React, { Component } from 'react';
import axios from '../../../axios';
import { Button } from 'react-bootstrap';

import Spinner from '../../UI/Spinner/Spinner';
import './FullPost.css';
import Auxi from '../../../hoc/Auxi/Auxi';
import image from '../../../assets/imgs/1.jpg';
import TimeSection from '../timeSection/timeSection.js';

class FullPost extends Component {
  state ={
     objectPostLoaded: null,
     error: null
  }
  componentDidMount(){
   this.loadData();
  }

  componentDidUpdate(){
    this.loadData();
  }
  loadData(){
    if(this.props.match.params.id && !this.state.error){
      if(!this.state.objectPostLoaded || (this.state.objectPostLoaded && this.state.objectPostLoaded.id !== this.props.match.params.id)){
        axios.get('/blog-posts.json/')
         .then(response => {
            for(let key in response.data){
              if(this.props.match.params.id === key ){
                this.setState(prevState => ({
                  objectPostLoaded: {
                    ...prevState.objectPostLoaded,
                    post: response.data[key].post,
                    config: response.data[key].config,
                    id: key
                  },
                  error: null

                }));

              }
            }
         })
          .catch( error => {
             this.setState({error: error.message});
          });
      }

    }

  }

  pageReloadHandler = () => {
    this.setState({error: false});
  }
  render(){
    let fullpost = this.state.error
    ?

     <div style={{margin: "70px auto"}}>
       <h5>Something went wrong.</h5>
       <h5>Error: {this.state.error}</h5>
       <Button variant="primary" onClick={this.pageReloadHandler}>RELOAD</Button>
     </div>

     :
    <div> <Spinner animation="border" variant="primary"/></div>;
    if(this.state.objectPostLoaded && (this.state.objectPostLoaded.id === this.props.match.params.id)){

      fullpost = (
        <div className="FullPost-Section">
           <img src={image} alt="mypic" />
           <TimeSection
             fontSize="100%"
             config={this.state.objectPostLoaded.config}/>
           <h5>{this.state.objectPostLoaded.post.title}</h5>
           <p className="post-content">
           {this.state.objectPostLoaded.post.content.split('\n').map(item =>(
             <span key={item}>
               {item}
               <br/>
             </span>
           ) )}</p>

      </div>);

    }
    return(
     <Auxi>
       {fullpost}
     </Auxi>
    );
  }
}

export default FullPost;
