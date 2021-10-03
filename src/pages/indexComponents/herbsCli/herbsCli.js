import React from 'react'
import styles from './styles.module.css'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'

export default function HerbsCli() {
    return (
        <>
            <div className={styles.container}>
                <section className={styles.details}>
                    <h3>Command Line Interface</h3>
                    <p>
                        The Herbs CLI makes it easy to create and manage your herbs project directly from the terminal.
                        CLI is essential to improve development time and is designed to get you working quickly with herbs, with an emphasis on your domain.
                    </p>
                </section>
                <section className={styles.animation}>
                    <Link to={useBaseUrl('docs/tutorial/new-project#with-herbs-cli')} >
                        <img src={useBaseUrl('/assets/herbs-new.gif')} />
                    </Link>
                </section>
            </div>
        </>
    )
}
