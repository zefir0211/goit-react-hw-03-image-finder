import PropTypes from 'prop-types';
import  { Button }  from './Button.styled';

export const LoadMore = ({ loadMore }) => {
    function onButtonClick() {
        loadMore();
    }
    return <Button onClick={onButtonClick}>Load more</Button>;
};

LoadMore.propTypes = {
    loadMore: PropTypes.func,
};