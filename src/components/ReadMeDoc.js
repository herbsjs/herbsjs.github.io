import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function ReadMeDoc({ docURL }) {
	const [markdown, setMarkdown] = useState('')

	useEffect(() => {
		fetch(docURL)
			.then((res) => res.text())
			.then((text) => setMarkdown(text))
	}, [])

	return (
		<>
			<ReactMarkdown children={markdown} />
		</>
	)
}
