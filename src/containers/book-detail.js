import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){
    return(
      <div>
      Hello Here is the book you want :)
      </div>
    )
  }
}


function mapStateToProps(){
  return {
    book: state.selected
  }
}

// SelectBookReducer is creating the selected piece of state in reducers/Index.js. That is why book is set to state.selected

export default connect(mapStateToProps)(BookDetail);
