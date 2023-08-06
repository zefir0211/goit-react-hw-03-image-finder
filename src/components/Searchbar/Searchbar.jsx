import  { Component } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { Header, Form, Input, Button, Text, ButtonLabel } from './Searchbar.styled';

export default class Searchbar extends Component {
    state = {
        searchPhotoValue: '',
        keyword:'keyword',
    };

    onChange=(event)=> {
        this.setState({
            searchPhotoValue: event.target.value.toLowerCase(),
            keyword: event.currentTarget.value,
        });
    };

    findPhoto=(event)=> {
        event.preventDefault();
        if (this.state.searchPhotoValue.trim() === '') {
            Notiflix.Notify.failure('Please, fill out the search form');
            return
        }
        this.props.submitSearch(this.state.searchPhotoValue);
        this.setState({ searchPhotoValue:'',})
    }
    render() {
        return (
            <Header>
                <Form id="search-form" onSubmit={this.findPhoto}>
                    <Input
                        type="text"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.onChange}
                        value={this.state.searchPhotoValue}
                    />
                    <Button type="submit">Search</Button>
                </Form>
                <Text>Image search by keyword: <ButtonLabel>{this.state.keyword}</ButtonLabel></Text>
            </Header>
        );
    }
};
Searchbar.propTypes = {
    submitSearch: PropTypes.func,
};