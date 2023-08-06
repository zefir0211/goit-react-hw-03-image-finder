import { Component } from 'react';
import Notiflix from 'notiflix';
import SearchAPI from './SearchAPI/SearchAPI';
import Searchbar from './Searchbar/Searchbar';
import { ImagesGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { LoadMore } from './Button/Button';
import Modal from './Modal/Modal';

const API = new SearchAPI();

export default class App extends Component {
  state = {
    images: [],
    request: '',
    isLoading: false,
    button: false,
    page: 1,
    total: 1,
    alt: '',
    modal: '',
  };

  async componentDidUpdate(_, prevState) {
    const prevRequest = prevState.request;
    const nextRequest = this.state.request;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevRequest !== nextRequest) {
      this.state.images = [];
      this.state.page = 1;
      this.serverAPI();
    }
    if (prevPage !== nextPage) {
      this.serverAPI();
    }
  }

  serverAPI = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      API.page = this.state.page;
      API.name = this.state.request;
      const data = await API.serverData();
      this.state.total = await data.totalHits;
      const hits = await data.hits;
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isLoading: false,
      }));
      return this.notiflix();
    } catch (error) {
      this.setState({
        isLoading: false,
      });
    }
  };

  notiflix = () => {
    const { total, page } = this.state;
    if (total > 0 && page === 1) {
      return this.notiflixSuccess(total);
    }
    if (total === 0) {
      return this.notiflixWarning();
    }

    if (Math.ceil(total / 12) === page) {
      return this.notiflixInfo();
    }
  };
  notiflixSuccess = total => {
    Notiflix.Notify.success(`Hooray! We found ${total} images.`);
  };
  notiflixWarning = () => {
    Notiflix.Notify.warning(
      `Sorry, there are no images matching your search query. Please try again.`
    );
  };
  notiflixInfo = () => {
    Notiflix.Notify.info(
      `We're sorry, but you've reached the end of search results.`
    );
  };

  onSearchPhoto = searchPhotoValue => {
    this.setState({
      request: searchPhotoValue,
    });
    console.log(searchPhotoValue);
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    console.log(this.state.request);
  };

  toggleModal = event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    this.setState({
      modal: event.target.dataset.src,
      alt: event.target.getAttribute('alt'),
    });
  };

  resetModal = () => {
    this.setState({
      modal: '',
      alt: '',
    });
  };

  render() {
    const { images, isLoading, total, page, modal, alt } = this.state;
    const buttonСondition =
      total > 0 && Math.ceil(total / 12) !== page && !isLoading;
    return (
      <>
        <Searchbar submitSearch={this.onSearchPhoto} />
        {images.length !== 0 && (
          <ImagesGallery images={images} showModal={this.toggleModal} />
        )}
        {this.state.isLoading && <Loader />}
        {buttonСondition > 0 && <LoadMore loadMore={this.loadMore} />}
        {modal !== '' && (
          <Modal src={modal} alt={alt} popap={this.resetModal} />
        )}
      </>
    );
  }
}
