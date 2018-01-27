import React from 'react';

const AvatarCard = (props) => (
	<div id="avatar-card">
		<div className="card-wrapper text-center">
			<div className="photo-view mb-3">
				<img src={props.avatarUrl} />
			</div>
			<h4 className="subtitle">{props.name}</h4>
			<h4 className="position-title">{props.position}</h4>
			<p className="quote">{props.quote}</p>
		</div>	
	</div>
)
export default AvatarCard