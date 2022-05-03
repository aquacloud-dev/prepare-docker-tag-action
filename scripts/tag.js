module.exports = ({ github }) => ({
	type,
	registry,
	imageName,
	steps: { packageVersion = null, mavenVersion: pomVersion = null }
}) => {
	const BRANCH = github.ref.replace('refs/heads/','').trim()
	const DOCKER_IMAGE = `${registry}/${imageName}`
	let version = null


	if ( github.ref.startsWith('refs/tags/') ) {
		version = github.ref.replace('refs/tags/','').trim()
	} else if ( github.ref.startsWith('refs/heads/') ) {
		version = BRANCH

		if ( BRANCH === "${{ github.event.repository.default_branch }}") {
			version = 'latest'
		} else if ( BRANCH === "develop" ) {
			version = 'next'
		}
	}

	let tags = [`${DOCKER_IMAGE}:${version}`]

	switch (type) {
		case 'node':
			if ( packageVersion === null ) break
			tags.push(`${DOCKER_IMAGE}:${packageVersion}`)
			break
		case 'maven':
			if ( pomVersion === null ) break
			tags.push(`${DOCKER_IMAGE}:${pomVersion}`)
			break
		default:
			break
	}

	const versionRegex = /^v(?<major>[0-9]{1,3})\.(?<minor>[0-9]{1,3})\.(?<patch>[0-9]{1,3})$/

	if ( versionRegex.test(version) ) {
		const { groups: { major, minor, patch } } = versionRegex.exec(version)
		tags.push(
			`${DOCKER_IMAGE}:${major}.${minor}.${patch}`,
			`${DOCKER_IMAGE}:${major}.${minor}`,
			`${DOCKER_IMAGE}:latest`,
		)
	}

	tags = Array.from(new Set(tags))
	tags = tags.filter(tag => !tag.endsWith(':'))

	return {
		pomVersion,
		packageVersion,
		version,
		tags
	}
}
