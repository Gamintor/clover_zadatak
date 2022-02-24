import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import useDuration from '../Hooks/useDuration';
import './ContentModal.css';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const style = {
	display: 'flex',
	columnGap: '32px',
	position: 'relative',
	width: '70%',
	height: '65%',
	margin: '170px auto',
	padding: '16px',
	bgcolor: '#224957',
	border: '4px solid #092c39',
	outline: 'none',
	color: '#fff',
	borderRadius: '10px',
	boxShadow: '2px 2px 10px 10px rgba(0, 0, 0, 0.3)',
	fontFamily: 'Montserrat, sans-serif',
};

export default function ContentModal({ children, duration, image_big, title, artist, order_number }) {
	const [open, setOpen] = React.useState(false);
	const durationTime = useDuration(duration);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<div className='singleCard' onClick={handleOpen}>
				{children}
			</div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<img src={image_big} alt='albumCover' id='bigCover'></img>
						<div className='infoDiv'>
							<div className='minorDiv'>
								<h2 id='title'>{title}</h2>
								<h3 id='artist'>{artist}</h3>
							</div>
							<div className='minorDiv' style={{ paddingBottom: '24px' }}>
								<span>
									Duration: {durationTime[0]}:{durationTime[1]}
								</span>
								<span>Current position on the list: {order_number}</span>
							</div>
						</div>
						<IconButton aria-label='close' color='warning' id='closeButton' onClick={handleClose}>
							<CloseIcon fontSize='large' />
						</IconButton>
					</Box>
				</Fade>
			</Modal>
		</>
	);
}
