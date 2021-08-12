const packageVersion = async (name) => {
    try {
        const request = await fetch(`http://registry.npmjs.com/-/v1/search?text=${name}&size=20`)
        const { objects } = await request.json()
        return objects.find(pkg => pkg.package.name === name)
    } catch (error) {
        return { package: { version: '0.0.0' } }
    }
}

export default packageVersion