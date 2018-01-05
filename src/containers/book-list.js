import React, {Component} from 'React';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';
// react-redux acts as bridge between views and state. This smart component will be able to access state

// "books" references the books key from the return value of the mapStateToProps function. the value of the books key is the array from the booksListReducer
class BookList extends Component{
renderList(){
  console.log("books",this.props.books)
  console.log("selectBook",this.props.selectBook)
  return this.props.books.map((book)=>{
    return (
      <li
      onClick={()=> {this.props.selectBook(book)}}
      className="list-group-item"
      key={book.title} >
      {book.title}
      </li>

    )
  })
}

  render(){
    return(
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {books: state.books}
}

// function takes all of app state as an argument and what is returned is set equal to this.props inside the container

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ selectBook : selectBook }, dispatch)
}
// Whatever is returned from mapDispatchToProps (in this case, selectBook) is set to the value of props in the context of this BookList container

// bindAcitonCreators function binds the action creator to this container by sending what is returned through the dispatch function, which acts as a funnel for the reducers. Is imported from redux.

// can target the actionCreator by calling "this.props.selectBook" because of selectBook key passed in the bindActionCreators func.

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// export the smart container rather than the whole componet


// NOTES
// this.props.books
// use renderList function to map over books array and return the title of each. "book" is a reference variable create for use inside the map function.
// map will create a <li> for each index of the book array, rendering a list of books
// imbed the renderList function inside the rendered HTML for the BookList Componenet
