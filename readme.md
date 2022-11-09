## Intro

Building Docker image of a Node.js application usually slow because of re-installing dependencies. Those re-installation usually triggered by `package.json` & `package-lock.json` content changes. The solution is to minimize content changes for both files. `package-lock.json` & `package.json` are changed when dependencies are changed which is totally right. However, we might version our application without any deps changes, this results in a deps re-installation. To avoid this we need to freeze the version in both `package.json` and `package-lock.json`.

## Build 

```shell
docker buildx build -t node-version-docker-build .
```

## Run

```shell
docker run -it --rm -p "127.0.0.1:8080:8080" node-version-docker-build
```