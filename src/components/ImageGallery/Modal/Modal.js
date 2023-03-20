import { Overlay, ModalBlock } from './Modal.styled';

export default function Modal({ modalUrl }) {
  return (
    <Overlay>
      <ModalBlock>
        <img src={modalUrl} alt="" />
      </ModalBlock>
    </Overlay>
  );
}
