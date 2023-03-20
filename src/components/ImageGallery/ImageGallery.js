import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Gallery, App, ErrorImg } from './ImageGallery.styled';
import errorImg from './vecteezy_404-landing-page_6549647.jpg';

import imageApi from 'services/image-api';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Button from './Button/Button';

export default class ImageGallery extends Component {
  state = {
    imageApiAnswer: [],
    status: 'idle',
    showModalImage: false,
    modalUrl: '',
    searchPage: 1,
  };

  componentDidUpdate(prevProps, _) {
    const { searchQuery } = this.props;

    if (prevProps.searchQuery !== searchQuery) {
      this.setState({ status: 'panding' });

      this.renderImages();
    }
  }

  renderImages = () => {
    const { searchQuery } = this.props;
    const { searchPage } = this.state;

    imageApi(searchQuery, searchPage)
      .then(({ data }) => {
        if (data.total === 0) {
          this.setState({ status: 'rejected' });
          return toast.error('incorrect query', {
            position: 'top-center',
          });
        }
        this.setState({ imageApiAnswer: data.hits, status: 'resolved' });
        // if () {
        // }
        // if () {
        //   this.setState(prevState => ({
        //   imageApiAnswer: [...prevState.imageApiAnswer, ...data.hits],
        //   status: 'resolved',
        // }));
        // }
      })
      .catch(error => {
        this.setState({ error, status: 'rejected' });
      });
  };

  toggleModalImage = modalUrl => {
    this.setState(({ showModalImage }) => ({
      showModalImage: !showModalImage,
      modalUrl,
    }));
  };

  incrementPage = () => {
    this.setState(prevState => ({
      searchPage: prevState.searchPage + 1,
    }));
    this.renderImages();
  };

  render() {
    const { imageApiAnswer, status, showModalImage, modalUrl } = this.state;

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
                toggleModalImage={this.toggleModalImage}
              />
            ))}
            {showModalImage && <Modal modalUrl={modalUrl} />}
          </Gallery>
          <Button incrementPage={this.incrementPage} />
        </App>
      );
    }
  }
}
