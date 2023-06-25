const User = (props) => {
	return (
		<div className="user-part">
            			<p>{props.userName}</p>
         <i className="fa-regular fa-user"></i>

		</div>
	);
};

export default User;