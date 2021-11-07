import React from "react";
import clsx from "clsx";
import styles from './styles.module.css'
import contributors from '../../../static/contributors.json';

export default function ContributorsList() {

    const listContributors = contributors.map((contributor) =>
        <li className={clsx('contributorRow', styles.contributorRow)} key={contributor.login}>
            <img className={clsx('avatar', styles.avatar)} src={contributor.avatar_url} />

            <a className={clsx('contributorLogin', styles.contributorLogin)} target="_blank" href={contributor.html_url}>
                {contributor.login}
            </a>
        </li>
    );

    return (
        <ul className={clsx('contributorList', styles.contributorList)}>
            {listContributors}
        </ul>
    )
}