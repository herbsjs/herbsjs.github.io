const packageVersion = async (name) => {
    try {
        const request = await fetch(`https://registry.npmjs.com/-/v1/search?text=${name}&size=20`)
        const { objects } = await request.json()
        return objects.find(pkg => pkg.package.name === name)
    } catch (error) {
        return { package: null }
    }
}

export default packageVersion
