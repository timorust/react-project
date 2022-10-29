import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import skills from '../data/skills.js'

const SingleSkill = () => {

	const params = useParams()
	const navigate = useNavigate()
	const skill = skills.find((skill) => skill.slug === params.skillSlug)

	useEffect(() => {
		if (!skill) {
			navigate('..', { relative: 'path' })
		}

	}, [skill, navigate])

	return (
		<>
			<h1>{skill?.title}</h1>
			<h2>{skill?.slug}</h2>
			<h3>{skill?.id}</h3>
			<Link to='..' relative='path'>All Skills</Link>
		</>
	)
}

export default SingleSkill