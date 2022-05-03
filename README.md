# Prepare docker tag
<!-- action-docs-description -->
## Description

Prepare docker tag


<!-- action-docs-description -->

<!-- action-docs-inputs -->
## Inputs

| parameter | description | required | default |
| - | - | - | - |
| registry | Docker registry | `true` |  |
| context | Context directory | `false` | . |
| image_name | Image name | `false` | ${{ github.event.repository.name }} |
| manifest_version | Manifest version (package.json, pom.xml etc) | `true` |  |



<!-- action-docs-inputs -->

<!-- action-docs-outputs -->
## Outputs

| parameter | description |
| - | - |
| tags | List of docker tags |
| version | List of docker version |
| manifest_version | List of maven version |



<!-- action-docs-outputs -->

<!-- action-docs-runs -->
## Runs

This action is an `composite` action.


<!-- action-docs-runs -->

