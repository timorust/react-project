import './Info.css'
import styles from './Info.module.css'

console.log(styles)

//{
//	"info": "Info_info__FrvwK",
//		"myOtherButton": "Info_myOtherButton__QinBx"
//}

function Info() {
	return (
		<div className={styles.info}>
			<h1>Hello from the Info component</h1>
			<h2>Heading in the Info component</h2>
			<button className='my-button'>Info component button</button>
			<button className={styles.myOtherButton}>Button with local css module</button>
		</div>
	)

}

export default Info