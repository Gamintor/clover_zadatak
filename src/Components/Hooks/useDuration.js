const useDuration = duration => {
	let minutes, seconds;

	minutes = Math.floor(duration / 60);
	seconds = duration % 60;

	minutes = minutes <= 9 ? `0${minutes}` : minutes.toString();
	seconds = seconds <= 9 ? `0${seconds}` : seconds.toString();

	return [minutes, seconds];
};

export default useDuration;
