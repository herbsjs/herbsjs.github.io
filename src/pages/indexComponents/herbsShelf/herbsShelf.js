import React from 'react'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import clsx from 'clsx'

export default function HerbsShelf() {
    return (
        <>
            <div className={styles.section}>
                <div className={styles.container}>
                    <section className={styles.animation}>
                        <Link to={useBaseUrl('docs/glues/herbsshelf')} >
                            <img src={useBaseUrl('/img/herbsshelf_screenshot.gif')} />
                        </Link>
                    </section>
                    <section className={styles.details}>
                        <h3>Self-generated documentation</h3>
                        <p>
                            The <Link to={useBaseUrl('docs/glues/herbsshelf')} >Herbs Shelf</Link> is a self-generated documentation tool that reads
                            your uses use cases, entities, and specs to create docs and visual representations of your domain.
                            It allows domain experts and developers to easily understand and collaborate on your project.
                        </p>
                    </section>
                </div>
            </div>
        </>
    )
}
