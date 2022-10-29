import queryString from 'query-string'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import skills from '../data/skills.js'

const SORT_KEYS = ['title', 'slug', 'id']

function sortSkills(skills, key) {

	const sortedSkills = [...skills]
	if (!key || !SORT_KEYS.includes(key)) {
		return sortedSkills
	}
	sortedSkills.sort((a, b) => a[key] > b[key] ? 1 : -1)
	return sortedSkills
}

const Skills = () => {
	const location = useLocation()
	const query = queryString.parse(location.search)
	const navigate = useNavigate()
	const [sortKey, setSortKey] = useState(query.sort)
	const [sortedSkills, setSortedSkills] = useState(sortSkills(skills, sortKey))

	useEffect(() => {
		if (!SORT_KEYS.includes(sortKey)) {
			navigate('.')
			setSortKey()
			setSortedSkills([...skills])
		}
	}, [sortKey, navigate])


	return (
		<>
			<h1>{sortKey ? `Skills sorted => ${sortKey}` : 'Skills'}</h1>
			{sortedSkills.map((skill) =>
				<div key={skill.id}>
					<Link
						to={skill.slug}
						className='skillLink'
					>{skill.title}
					</Link>
				</div>
			)}

		</>
	)
}

export default Skills