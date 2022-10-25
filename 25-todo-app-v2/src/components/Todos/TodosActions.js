import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"
import Button from "../UI/Button"
import styles from './TodosActions.module.css'

function TodosActions({ resetTodos, deleteCompleted, completedTodosExist }) {
	return (
		<div className={styles.todoActionsContainer}>
			<Button
				disabled={!completedTodosExist}
				title='Clear Completed Todos'
				onClick={deleteCompleted}>

				<RiDeleteBin2Line />
			</Button>
			<Button
				title='Reset Todos'
				onClick={resetTodos}>
				<RiRefreshLine />
			</Button>
		</div>
	)
}

export default TodosActions