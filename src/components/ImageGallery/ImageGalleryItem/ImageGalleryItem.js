import { Component } from 'react';
import PropTypes from 'prop-types';

import { GalleryCard, GalleryImage } from './ImageGalleryItem.styled';

import Modal from '../Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModalImage: false,
    modalUrl: '',
  };

  toggleModalImage = () => {
    this.setState(({ showModalImage }) => ({
      showModalImage: !showModalImage,
    }));
  };

  setModalImage = modalUrl => {
    this.setState({
      modalUrl,
    });
  };

  render() {
    const { smallImg, mainImg } = this.props;
    return (
      <>
        <GalleryCard>
          <GalleryImage
            atr
            src={smallImg}
            data-url={mainImg}
            alt=""
            onClick={e => {
              // document.getElementById('root').style.overflow = 'hidden';
              this.toggleModalImage();
              this.setModalImage(e.currentTarget.dataset.url);
            }}
          />
        </GalleryCard>
        {this.state.showModalImage && (
          <Modal
            modalUrl={this.state.modalUrl}
            onToggleModalImage={this.toggleModalImage}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string,
  mainImg: PropTypes.string,
};
