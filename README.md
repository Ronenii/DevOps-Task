# DevOps-Task

- [DevOps-Task](#devops-task)
  - [1. Technologies used](#1-technologies-used)
  - [2. Overview](#2-overview)
  - [3. Deployment](#3-deployment)
    - [3.1 Pulling the image](#31-pulling-the-image)
    - [3.2 Create the container](#32-create-the-container)
    - [3.3 Stop the container from running](#33-stop-the-container-from-running)
    - [3.4 Start the container again](#34-start-the-container-again)
    - [3.5 Testing](#35-testing)
      - [3.5.1 Check if the container is running](#351-check-if-the-container-is-running)
      - [3.5.2 Check if the server is up](#352-check-if-the-server-is-up)
  - [4. Usage](#4-usage)

## 1. Technologies used
* IDE: VS Code
* Programming language: node.js 21.2
* Backend framework: express
* Containerization: docker

## 2. Overview

## 3. Deployment
Please note you will need sudo privileges in order to run docker commands.

### 3.1 Pulling the image
For the server to work you will first need to pull the image from [Dockerhub](https://hub.docker.com/).
```Console
    docker pull ronenii/devops-task:1.0
```
### 3.2 Create the container
After you have successfully pulled the image, you can create and run the server container on your machine (be it Linux or Windows) using the following command:
```Console
    docker run -p 3000:3000 ronenii/devops-task:1.0
```
This will create a container with a random name and an ID.

**optional tags:**
* -d: runs server in detached mode.
* --name {container name}: names you container according to what you specified.
* --init: gives your container an init service.

### 3.3 Stop the container from running
You have multiple ways to stop the container:
```console
docker stop {id}/{name}
```
* If the docker is not running in detached mode and has an init service you can use <kbd>Ctrl</kbd> + <kbd>C</kbd>.
* Kill the container process itself.
* Docker desktop.

### 3.4 Start the container again

Now that you have a container on your local machine you no longer need step 3.2 to run it. You can simply use the following command:
```console
    docker start {id}/{name}
```

Do keep in mind that whatever tags you have given in step 3.2 when running the container shall remain when you start the container at this point.

### 3.5 Testing

#### 3.5.1 Check if the container is running
 To view all containers that are currently running, use: 
```console
    docker ps
 ```
Please make sure that your container is listed and running.

#### 3.5.2 Check if the server is up

If the container is up and running, you can try and GET [http://localhost:3000/].
You should receive a Hello World! html file as a response.

## 4. Usage


