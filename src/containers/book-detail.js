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
        <div>{this.props.book.author}</div>
        <div>{this.props.book.pages}</div>
        <img src="http://www.royalcanin.ca/~/media/Royal-Canin-Canada/Product-Categories/cat-adult-landing-hero.ashx" alt="image of cat"/>
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
