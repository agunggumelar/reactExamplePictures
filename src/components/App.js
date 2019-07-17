import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images:[] };

    onSearchSubmit = async (terms) => {
        /*
        axios
            .get('https://api.unsplash.com/search/photos', {
                params: { query: terms },
                headers: {
                    Authorization: 'Client-ID 43746307b4f96d967ecd0056310aa5a2374d6b739688d9017daacd8b3c9bebcc'
                }
            })
            .then((response) => {
                console.log(response.data.results);
            });
        */
        const response = await unsplash.get('/search/photos', {
            params: { query: terms }
        });
        //console.log(response.data.results);
        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
};

export default App;