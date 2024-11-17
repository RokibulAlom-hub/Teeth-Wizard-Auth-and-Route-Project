import React from 'react';

const FeedCard = ({ feeds }) => {
    const { review, image, name } = feeds;
    return (
        <div>
            <div className="card image-full  shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{review}</p>
                    <div>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask bg-yellow-400 mask-star" />
                            <input type="radio" name="rating-1" className="mask bg-yellow-400 mask-star" defaultChecked />
                            <input type="radio" name="rating-1" className="mask bg-yellow-400 mask-star" />
                            <input type="radio" name="rating-1" className="mask bg-yellow-400 mask-star" />
                            <input type="radio" name="rating-1" className="mask bg-yellow-400 mask-star" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedCard;