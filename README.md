# Micronaut PWA with Lit-element
A simple project with `micronaut` and `lit-element`.

## Run
In project root:
* `./gradlew server:run`

    Test: http://localhost:8080/name/Tan
* `./gradlew client:start`

    Test: http://localhost:8081

## Build
In project root:
* `gradle buildAll` (why I need to run this twice?)
* `java -jar server/build/libs/server-0.1-all.jar`

Access http://localhost:8080

## References
* https://github.com/micronaut-projects/micronaut-core/issues/553