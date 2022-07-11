import React, { Component } from 'react';

import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <ImageGrid />
                </div>
            </Provider>
        );
    }
}

export default App;
