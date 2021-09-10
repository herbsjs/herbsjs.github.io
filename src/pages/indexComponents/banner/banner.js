import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { GitHub } from '@material-ui/icons'
import BrowserOnly from '@docusaurus/BrowserOnly'
import useThemeContext from '@theme/hooks/useThemeContext'

const ImageSwitcher = () => {
	return (
		<BrowserOnly fallback={<img alt="herbsjs logo" src='img/logo-herbsjs.png' />}>
			{() => {
				const { isDarkTheme } = useThemeContext()
				const imgSrc = isDarkTheme
					? 'img/logo-herbsjs-douradoebranco.png'
					: 'img/logo-herbsjs.png'
				const fullImgSrc = useBaseUrl(imgSrc)
				return <img src={fullImgSrc} />
			}}
		</BrowserOnly>
	)
}

const Banner = ({ version }) => {
	return (
		<header className={clsx('hero', styles.heroBanner)}>
			<div className='container'>
				<ImageSwitcher />
				<h4>UNLOCK YOUR DOMAIN</h4>
				<div className={styles.buttons}>
					<Link
						className={clsx(
							'button button--outline button--primary button--lg',
							styles.getStarted
						)}
						to={useBaseUrl('docs/')}
					>
						Get started
					</Link>{' '}
					<Link
						className={clsx(
							'button button--primary button--lg',
							styles.getStarted
						)}
						to='https://github.com/herbsjs'
					>
						<GitHub fontSize='small' /> Start
					</Link>
				</div>
				<div className={styles.versionInfo}>
					{version && <p>Last stable version <a href={`https://github.com/herbsjs/herbs/releases/tag/v${version}`} rel="noopener noreferrer" target="_blank"> {version} </a></p>}
				</div>
			</div>
		</header>
	)
}
export default Banner
