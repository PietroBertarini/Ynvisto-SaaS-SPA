# Ynvisto.Spa
Single Page Application used to access the Ynvisto System

# How to deploy the SPA
1. Create a branch called `rc/v{version_number}`
1. Assess if there are breaking changes in code being deployed:
    1. If there are, increase the SemVer number to match the `version_number`
1. Run the production build of this branch locally using `serve` alongside the API version that will be/is deployed in production
    1. Change the `.env.production` file endpoint to the localhost API
    1. Run the API
    1. Test the version
1. If the build is OK:
    1. Revert the changes to `.env.production`
    1. Merge it into `main` and tag the merge commit with `v{version_number}`