const Form = (props) => {
	return (
		<div>
			<form>
				<label htmlFor="">
					Username:{' '}
					<input
						type="text"
						value={props.username}
						onChange={props.handleChange}
					/>
				</label>
			</form>

			<p>Username: {props.username}</p>
		</div>
	);
};

export default Form;
