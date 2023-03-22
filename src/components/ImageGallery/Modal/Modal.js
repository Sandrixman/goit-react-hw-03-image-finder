import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalBlock, Btn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onToggleModalImage();
    }
  };

  render() {
    const { modalUrl, onToggleModalImage } = this.props;

    return createPortal(
      <Overlay
        onClick={e => {
          if (e.target === e.currentTarget) {
            onToggleModalImage();
          }
        }}
      >
        <ModalBlock>
          <img src={modalUrl} alt="" />
          <Btn onClick={onToggleModalImage}>X</Btn>
        </ModalBlock>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  modalUrl: PropTypes.string,
  onToggleModalImage: PropTypes.func,
};
