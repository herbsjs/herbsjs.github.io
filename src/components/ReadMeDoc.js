import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import environment from '../config/environment'

export default function ReadMeDoc({ docURL }) {
	const [markdown, setMarkdown] = useState('')
	const [isOk, setIsOk] = useState(true)

	useEffect(() => {
		fetch(`${environment.docBaseUrl}${docURL}`)
			.then((res) => res.text())
			.then((text) => setMarkdown(text))
			.catch((error) => {
				setIsOk(false)
			})
	}, [])

	return (
		<>
			{isOk ? (
				<ReactMarkdown children={markdown} />
			) : (
				<div>
					<h3>Não foi possível carregar a documentação neste momento.</h3>
					<p>
						Confira no <a href={environment.herbsGithub}>Github.</a>
					</p>
				</div>
			)}
		</>
	)
}
