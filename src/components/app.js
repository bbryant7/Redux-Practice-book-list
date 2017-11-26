import React, { Component } from 'react';
import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    return (
      <div>
      React simple starter
      <BookList/>
      </div>

    );
  }
}



// APPLICATION RESPONSIBILITES:

// App - cares that the book-list component and book-detail components render, doesn't actually care about change (Component)
// BookList component only cares about the change(state) of the booklist (Container)
// Book-details only cares about the changes (state) of book details. Doesn't need to know about the book list. (Container)
