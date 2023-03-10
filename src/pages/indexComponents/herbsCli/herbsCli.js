import React from 'react'
import styles from './styles.module.css'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'
import clsx from 'clsx'

export default function HerbsCli() {
    return (
        <>
            <div className={clsx([styles.section, styles.container_grey])}>
                <div className={styles.container}>
                    <section className={styles.details}>
                        <h3>Command Line Interface</h3>
                        <p>
                            The <Link to={useBaseUrl('docs/tutorial/new-project#with-herbs-cli')} > Herbs CLI </Link> makes it easy to create and manage your herbs project directly from the terminal.
                            CLI is essential to improve development time and is designed to get you working quickly with herbs, with an emphasis on your domain.
                        </p>
                    </section>
                    <section className={styles.animation}>
                        <Link to={useBaseUrl('docs/tutorial/new-project#with-herbs-cli')} >
                            <img src={useBaseUrl('/assets/herbs-new.gif')} />
                        </Link>
                    </section>
                </div>
            </div>
        </>
    )
}
