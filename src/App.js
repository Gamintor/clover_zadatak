import { useState, useEffect } from 'react';
import SingleSongCard from './Components/SingleSongCard/SingleSongCard';
import './App.css';

function App() {
	const [songs, setSongs] = useState([]);

	const fetchSongs = async () => {
		try {
			const { tracks } = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart').then(response => response.json());
			setSongs(tracks.data);
		} catch (error) {
			console.error(error);
			console.log('GET request failed!');
		}
	};

	const sortSongs = option => {
		if (option === 0) {
			fetchSongs();
		} else if (option === 1) {
			const ascendingArr = [...songs];
			ascendingArr.sort((a, b) => a.duration - b.duration);
			setSongs(ascendingArr);
		} else if (option === 2) {
			const descendingArr = [...songs];
			descendingArr.sort((a, b) => b.duration - a.duration);
			setSongs(descendingArr);
		}
	};

	useEffect(() => {
		fetchSongs();
	}, []);

	return (
		<div className='App'>
			<h1 id='mainTitle'>Top 10 songs</h1>
			<div className='toolbar'>
				<label htmlFor='sort'>Sort by duration:</label>
				<select name='sort' onChange={event => sortSongs(parseInt(event.target.value))}>
					<option value={0}>--Choose an option--</option>
					<option value={1}>Ascending</option>
					<option value={2}>Descending</option>
				</select>
			</div>
			<div className='songList'>
				{songs && songs.map((song, index) => <SingleSongCard key={song.id} duration={song.duration} title={song.title} artist={song.artist.name} image={song.album.cover} image_big={song.album.cover_big} order_number={index + 1} />)}
			</div>
		</div>
	);
}

export default App;
