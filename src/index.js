import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyClytfdi9jGJg4AUGWKHDr0jf_eUc-MMns';

// Create a new component that produces some HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };

    YTSearch({
      key: API_KEY,
      term: 'surfboards'
    }, videos => {
      this.setState({videos});
    });

  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }

}

// Take the component HTML and put it in the DOM
ReactDOM.render(
  <App/>, document.querySelector('.container'));
