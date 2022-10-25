import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {

	const [text, setText] = useState('')
	const onSubmitHandler = (event) => {
		event.preventDefault()
		addTodo(text)
		setText('')
	}
	return (
		<div className={styles.todoFromContainer}>

			<form onSubmit={onSubmitHandler}>
				<input placeholder="Enter new Todo" value={text} onChange={(e) => setText(e.target.value)} />
				<Button type="submit" title='Submit'>Submit</Button>
			</form>
		</div>
	)
}

export default TodoForm