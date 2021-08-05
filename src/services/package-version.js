const packageVersion = async (name) => {
    const request = await fetch(`http://registry.npmjs.com/-/v1/search?text=${name}&size=20`)
    const { objects } = await request.json()
    return objects.find(pkg => pkg.package.name === name)
}

export default packageVersion