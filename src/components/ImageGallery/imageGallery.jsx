import css from "./ImageGallery.module.css"
import ImageGalleryItem from "../ImageGalleryItem"

const ImageGallery = ({items, onImageClick}) => {
    return (
        <ul className={css.imageGallery}>
            {items.map(item => <ImageGalleryItem item={item} key={item.id} onImageClick={onImageClick} />)
            }
        </ul>
    )
}

export default ImageGallery;