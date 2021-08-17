import environment from "../config/environment"

const packageVersion = async (name) => {
    try {
        const request = await fetch(`${environment.registryNpmUrl}?text=${name}&size=20`)
        const { objects } = await request.json()
        return objects.find(pkg => pkg.package.name === name)
    } catch (error) {
        return { package: null }
    }
}

export default packageVersion
