import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){

    if(!this.props.book){
      return(
        <div> Select a book to get start </div>
      )
    }
    return(
      <div>
        <h3>Details: </h3>
        <div>{this.props.book.title}</div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    book: state.selected
  }
}

// SelectBookReducer is creating the selected piece of state in reducers/Index.js. That is why book is set to state.selected

export default connect(mapStateToProps)(BookDetail);
