import React, { Component } from "react";
import { connect } from "react-redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// Take applications state as an argument
function mapStateToProps(state) {
  // Whatever is returned will show up as props inside BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);

// Containers are components which can connect React & Redux (Smart component)
// BookList cares about when the list of books changes
// BookList needs a connection to redux
