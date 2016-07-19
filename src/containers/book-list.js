import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li onClick={() => this.props.selectBook(book)} key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// Anything returned from this function will end up as props in the
// BookList container
function mapStateToProps(state) {
  return {books: state.books};
}

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result must be passed to all reducers
  return bindActionCreators({
    selectBook: selectBook
  }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about
// the new dispatch method, selectBook.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
