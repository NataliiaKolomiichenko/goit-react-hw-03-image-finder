import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ item, onImageClick }) => {
    return (
        <li className={css.imageGalleryItem} onClick={() => onImageClick(item.largeImageURL)}>
            <img src={item.webformatURL} alt={item.tags} className={css.imageGalleryItemImage} />
        </li>
    )
}

export default ImageGalleryItem;