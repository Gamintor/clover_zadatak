import React from 'react';
import ContentModal from '../ContentModal/ContentModal.js';
import './SingleSongCard.css';

const SingleSongCard = ({ title, artist, image, duration, image_big, order_number }) => {
	return (
		<ContentModal duration={duration} image_big={image_big} title={title} artist={artist} order_number={order_number}>
			<img src={image} alt='albumCover' id='cardImg' />
			<div id='infoDiv'>
				<span>Title: {title}</span>
				<span>Artist: {artist}</span>
			</div>
		</ContentModal>
	);
};

export default SingleSongCard;
