import React, { Component } from 'react';

class Home extends Component {

    
   
    
      render (){
          return (
          <div  >
              Welcome, {`${this.props.current_user}`}! Enjoy the crosswords and try to beat the times!
              Time to test this
          </div>
          )
      }
    
    }

export default Home