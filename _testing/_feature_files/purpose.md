# Feature Files
### A repository for planning appropriate test coverage for Cypress using Cucumber and the Gherkin language.

### High Level Abstractions:

### Page Features:

### Cypress Commands:

### Data Models:

---------
# Automation Suite Maintenance:
All automated tests developed will require maintenance. Over time even the most isolated abstractions will need updating as the codebase changes, libraries increment their releases and supported features are deprecated. This applies to both the testing framework itself, Cypress and to, in this case REACT Vite.

In addition, if this were a business deployment there is a high chance that there is a better way to do things. Keeping everything highly maintainable and testable will improve the likelihood of talented QA Engineers or Developers refactoring, adding or deleting. 

Continuous integration and deployment is also an ideal state we can reach in our test automation. Starting with small projects and feature sets, developers will be able to deploy their code into a development environment firstly where the risk of doing so is considered minimal, or is mitigated. Our test suite can evaluate the code before it is merged and then the DevOps toolchain can continue.


## Critical Considerations:



## Unit Test: