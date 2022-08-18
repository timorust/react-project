function Person(props) {
	const { firstName, lastName, img, email } = props
	return <div className="card">
		<img src={img} alt="foto" />
		<h3>{firstName} {lastName}</h3>
		<h4>{email}</h4>

	</div>

}

export default Person