import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

export default class App extends Component {
  state = {
    searchQuery: '',
  };

  inputQuery = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.inputQuery} />
        <ImageGallery searchQuery={this.state.searchQuery} />
        <ToastContainer />
      </>
    );
  }
}
