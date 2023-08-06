import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import { GalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImagesGallery = ({ images, showModal }) => {
    return (
        <section>
            <Gallery onClick={showModal}>
                {images.map(image => (
                    <GalleryItem key={image.id} image={image}></GalleryItem>
                ))}
            </Gallery>
        </section>
    );
};

ImagesGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    showModal: PropTypes.func,
};