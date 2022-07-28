const fs = require('fs')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function getUrl(url) {
    var params = {
        method: 'GET'
    }
    const request = await fetch(`https://api.github.com/${url}`, params);
    return request.json();
}

async function getAllRepositories(orgName) {
    const allProjects = await getUrl(`orgs/${orgName}/repos`);
    return allProjects;
}

async function getAllRepositoryContributors(repositoryFullName) {
    const allContributors = await getUrl(`repos/${repositoryFullName}/contributors`);
    return allContributors;
}

function mapAllContributors(contributors) {
    return contributors.map(({
        login,
        html_url,
        avatar_url
    }) => {
        return {
            login,
            html_url,
            avatar_url
        }
    })
}

async function getAllRepositoriesContributors(repositories) {
    let contributors = []

    await Promise.all(repositories.map(async (repository) => {
        const contributorsByProject = await getAllRepositoryContributors(repository);
        contributors.push(...mapAllContributors(contributorsByProject))
    }))

    return contributors
}

function filterUniqueContributors(contributors) {
    return contributors.filter((v, i, a) => a.findIndex(t => (t.login === v.login)) === i);
}

function filterLoginBlackList(contributors) {
    const blacklist = [
        'alavortx',
        'dependabot[bot]',
        'mellogabvortx',
        'pafonso-magit',
        'semantic-release-bot',
        'juliadibo',
        'BrsPontes-Vortx',
        'anahelenamagit',
        'gmo-vortx',
        'jhomarolo-vortx',
        'm7vicente-vortx',
        'maikvortx',
        'eduardo-vortx',
        'vma-vortx',
        'vxksf',
        'dlojudice-vortx',
        'cpp-vortx',
        'isabelaalonsovortx'
    ]
    
    return contributors.filter(contributor => !blacklist.includes(contributor.login))
}

function orderContributors(contributors) {
    return contributors.sort((a, b) => a.login.localeCompare(b.login))
}

const GetAllContributors = async () => {
    const repositories = await getAllRepositories('herbsjs')
    const repositoriesFullName = repositories.map(project => project.full_name)
    const allRepositoriesContributors = await getAllRepositoriesContributors(repositoriesFullName)
    return filterLoginBlackList(filterUniqueContributors(orderContributors(allRepositoriesContributors)));
}

try {
    GetAllContributors().then(contributors => fs.writeFileSync('./static/contributors.json', JSON.stringify(contributors)))
} catch (err) {
    console.error(err)
}