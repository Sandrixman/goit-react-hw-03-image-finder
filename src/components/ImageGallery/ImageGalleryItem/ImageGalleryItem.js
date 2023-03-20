import { GalleryCard, GalleryImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  smallImg,
  mainImg,
  toggleModalImage,
}) {
  return (
    <GalleryCard>
      <GalleryImage
        atr
        src={smallImg}
        data-url={mainImg}
        alt=""
        onClick={e => {
          // document.getElementById('root').style.overflow = 'hidden';
          toggleModalImage(e.currentTarget.dataset.url);
        }}
      />
    </GalleryCard>
  );
}
