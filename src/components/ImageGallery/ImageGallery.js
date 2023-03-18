import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import imageApi from 'services/image-api';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';

export default class ImageGallery extends Component {
  state = {
    apiAnswer: [],
    error: 'ERROR',
    status: 'idle',
  };

  componentDidUpdate(prevProps, _) {
    const { searchQuery } = this.props;

    if (prevProps.searchQuery !== searchQuery) {
      this.setState({ status: 'panding' });

      console.log(searchQuery);
      imageApi(searchQuery)
        .then(({ data }) => {
          if (data.total === 0) {
            this.setState({ status: 'rejected' });
            return toast.error('incorrect query', {
              position: 'top-center',
            });
          }
          this.setState({ apiAnswer: data.hits, status: 'resolved' });
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
  }

  render() {
    const { apiAnswer, error, status } = this.state;

    if (status === 'idle') {
      return <div>you can start searching</div>;
    }
    if (status === 'panding') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <div>{error}</div>;
    }

    if (status === 'resolved') {
      return (
        <ul className="gallery">
          {apiAnswer.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              mainImg={largeImageURL}
              smallImg={webformatURL}
            />
          ))}
        </ul>
      );
    }
  }
}
