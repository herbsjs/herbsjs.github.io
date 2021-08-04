import React from 'react'
import Layout from '@theme/Layout'
import styles from './styles.module.css'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Banner from './indexComponents/banner/banner'
import Features from './indexComponents/features/features'
import Examples from './indexComponents/examples/examples'
import HowItWorks from './indexComponents/howItWorks/howItWorks'

function Home() {
	const context = useDocusaurusContext() 

	const userZoom = (typeof window !== "undefined" && window.devicePixelRatio > 1)
		? `${100 / (window.devicePixelRatio * 0.9)}%`
		: `normal`

	const { siteConfig = {} } = context
	return (
		<Layout
			title={`${siteConfig.title}`}
			description='Herbs - Build your microservices in Node.js with Clean Achitecture and Domain Driven Design.'
		>
			<Banner />
			<main style={{ zoom: userZoom }}>
				<Features />
				<div className={styles.section}>
					<h1>Build your Microservices in Node.js Faster and Future Proof</h1>
					<Examples />
					<h1>Generated On The Fly</h1>
					<div className={styles.badges}>
						<span className='badge badge--primary'>Repository</span>
						<span className='badge badge--primary'>GraphQL</span>
						<span className='badge badge--primary'>REST</span>
						<span className='badge badge--primary'>Herbs Shelf</span>
					</div>
				</div>
				<div className={styles.section}>
					<h1>How it works?</h1>
					<HowItWorks />
				</div>
			</main>
		</Layout>
	)
}

export default Home
