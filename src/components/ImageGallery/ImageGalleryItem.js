export default function ImageGalleryItem({ mainImg, smallImg }) {
  return (
    <li className="gallery-item">
      <img src={smallImg} alt="" />
    </li>
  );
}
