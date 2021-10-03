import React from 'react'
import styles from './styles.module.css'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function HerbsShelf() {
    return (
        <>
            <div className={styles.container}>
                <section className={styles.animation}>
                    <Link to={useBaseUrl('docs/glues/herbsshelf')} >
                        <img src={useBaseUrl('/img/herbsshelf_screenshot.gif')} />
                    </Link>
                </section>
                <section className={styles.details}>
                    <h3>Self-generated documentation</h3>
                    <p>Herbs Shelf is a self-generated documentation based on use cases and entities from your domain.
                        It is a great way to communicate and collaborate between domain experts and developers.</p>
                </section>
            </div>
        </>
    )
}
