import PropTypes from 'prop-types';
import { PhotoCard, Image } from './ImageGalleryItem.styled';


export const GalleryItem = ({ image }) => {
    return (
        <PhotoCard>
            <Image
                src={image.webformatURL}
                alt={image.tags}
                data-src={image.largeImageURL}
                id={image.id}
                className={image}></Image>
        </PhotoCard>
    );
};

GalleryItem.propTypes = {
    image: PropTypes.object,
};