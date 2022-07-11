import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImagesRequest } from '../../actions';

import './styles.css';

class ImageGrid extends Component {

    componentDidMount() {
        const { fetchImages } = this.props;
        fetchImages();
    }

    render() {
        const { images, loading, error } = this.props;
        return (
            <div className="content">
                {loading ? (
                    <h1>Loading...</h1>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <section className="grid">
                        {images.map(image => (
                            <div
                                key={image.id}
                                className={`item item-${Math.ceil(
                                    image.height / image.width,
                                )}`}
                            >
                                <img
                                    src={image.urls.small}
                                    alt={image.user.username}
                                />
                            </div>
                        ))}
                    </section>
                )}
            </div>
        );
    }
}

export default connect(
    ({ images }) => ({ ...images }),
    dispatch => {
        return {
            fetchImages: () => dispatch(fetchImagesRequest())
        };
    },
)(ImageGrid);
