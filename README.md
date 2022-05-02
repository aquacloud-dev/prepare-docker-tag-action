# Prepare docker tag
<!-- action-docs-description -->
## Description

Prepare docker tag


<!-- action-docs-description -->

<!-- action-docs-inputs -->
## Inputs

| parameter | description | required | default |
| - | - | - | - |
| type | Valid types (node | maven) | `true` |  |
| registry | Docker registry | `true` |  |
| context | Context directory | `false` | . |
| image_name | Image name | `false` | ${{ github.event.repository.name }} |
| mvn_token | Maven token | `false` |  |
| mvn_username | Maven username | `false` |  |



<!-- action-docs-inputs -->

<!-- action-docs-outputs -->
## Outputs

| parameter | description |
| - | - |
| tags | List of docker tags |
| version | List of docker version |
| mvnVersion | List of maven version |
| pkgVersion | List of package version |



<!-- action-docs-outputs -->

<!-- action-docs-runs -->
## Runs

This action is an `composite` action.


<!-- action-docs-runs -->

