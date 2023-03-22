import { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Header,
  Form,
  SearchButton,
  ButtonSpan,
  FormInput,
} from './Seachbar.styled';

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

    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <ButtonSpan>Search</ButtonSpan>
          </SearchButton>

          <FormInput
            type="text"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleQueryChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
