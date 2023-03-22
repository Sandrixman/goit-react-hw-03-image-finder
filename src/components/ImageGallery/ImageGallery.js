import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtoTypes from 'prop-types';

import { Gallery, App, ErrorImg } from './ImageGallery.styled';
import errorImg from './vecteezy_404-landing-page_6549647.jpg';

import imageApi from 'services/image-api';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';

export default class ImageGallery extends Component {
  state = {
    imageApiAnswer: [],
    status: 'idle',
    searchPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ imageApiAnswer: [], status: 'panding' });
    }
    if (
      prevProps.searchQuery !== this.props.searchQuery ||
      prevState.searchPage !== this.state.searchPage
    ) {
      this.getImages();
    }
  }

  getImages = () => {
    imageApi(this.props.searchQuery, this.state.searchPage)
      .then(({ data }) => {
        if (data.total === 0) {
          this.setState({ status: 'rejected' });
          return toast.error('incorrect query', {
            position: 'top-center',
          });
        }
        this.setState(prevState => ({
          imageApiAnswer: [...prevState.imageApiAnswer, ...data.hits],
          status: 'resolved',
        }));
      })
      .catch(error => {
        this.setState({ error, status: 'rejected' });
      });
  };

  loadMore = () => {
    this.setState(prevState => ({
      searchPage: prevState.searchPage + 1,
    }));
  };

  render() {
    const { imageApiAnswer, status } = this.state;

    if (status === 'idle') {
      return;
    }
    if (status === 'panding') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <ErrorImg src={errorImg} alt=""></ErrorImg>;
    }

    if (status === 'resolved') {
      return (
        <App>
          <Gallery>
            {imageApiAnswer.map(({ id, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                smallImg={webformatURL}
                mainImg={largeImageURL}
              />
            ))}
          </Gallery>
          <Button onIncrementPage={this.loadMore} />
        </App>
      );
    }
  }
}

ImageGallery.propTypes = {
  searchQuery: ProtoTypes.string,
};
