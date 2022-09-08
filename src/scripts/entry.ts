import { PersonalData } from '../types/types'

const app = async () => {
	const container = document.querySelector<HTMLElement>('.container')!
	const data = await fetch('http://localhost:3001/data')
		.then<PersonalData[]>((res) => {
			if (!res.ok) throw new Error(res.statusText)
			return res.json()
		})
		.catch((error) => {
			console.error('エラーが発生しました', error)
		})
	container.innerText = JSON.stringify(data, undefined, '　')
}

app()
