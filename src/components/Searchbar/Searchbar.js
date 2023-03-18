import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleQueryChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchQuery } = this.state;

    this.props.onSubmit(searchQuery.trim());
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Search</button>

          <input
            type="text"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleQueryChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
