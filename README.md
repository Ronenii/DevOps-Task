
# DevOps-Task

- [DevOps-Task](#devops-task)
  - [1. Technologies Used](#1-technologies-used)
  - [2. Overview](#2-overview)
  - [3. Deployment](#3-deployment)
    - [3.1 Pulling the Image](#31-pulling-the-image)
    - [3.2 Creating the Container](#32-creating-the-container)
    - [3.3 Stopping the Container](#33-stopping-the-container)
    - [3.4 Starting the Container Again](#34-starting-the-container-again)
    - [3.5 Testing](#35-testing)
      - [3.5.1 Checking if the Container is Running](#351-checking-if-the-container-is-running)
      - [3.5.2 Checking if the Server is Up](#352-checking-if-the-server-is-up)
    - [3.6 BONUS: Deploying with the Reverse Proxy Server](#36-bonus-deploying-with-the-reverse-proxy-server)
      - [3.6.1 Docker Compose](#361-docker-compose)
  - [4. Usage](#4-usage)
  - [4.1 BONUS: Reverse Proxy](#41-bonus-reverse-proxy)

## 1. Technologies Used

* IDE: VS Code
* Programming language: Node.js 21.2
* Backend framework: Express
* Containerization: Docker
* Reverse proxy server: Nginx

## 2. Overview

This repository demonstrates the development and deployment of a simple Node.js web application using Docker. The project encompasses creating a Node.js application, writing a Dockerfile, building and testing a Docker image, pushing the image to Docker Hub, and documenting the deployment process. Additionally, the repository includes extra credit tasks for configuring Docker-compose for auto-restarting the application and setting up Nginx as a reverse proxy.

## 3. Deployment

**Prerequisites:**

* Docker installed on your machine.
* Sudo privileges for running Docker commands on Linux systems.

**Steps:**

### 3.1 Pulling the Image

To run the server, you first need to pull the image from Docker Hub:

```bash
docker pull ronenii/devops-task:1.0
```

### 3.2 Creating the Container

Once the image is pulled, create and run the server container on your machine (Linux or Windows) using the following command:

```bash
docker run -p 3000:3000 ronenii/devops-task:1.0
```

This will create a container with a random name and an ID.

**Optional Tags:**

* `-d`: Runs the server in detached mode.
* `--name {container name}`: Names your container according to your specification.
* `--init`: Gives your container an init service.

### 3.3 Stopping the Container

You can stop the container using multiple methods:

1. Using the container ID or name:

```bash
docker stop {id}/{name}
```

2. Forcibly stopping a container not running in detached mode with an init service:

   Press <kbd>Ctrl</kbd> + <kbd>C</kbd>.

3. Killing the container process itself.

4. Using Docker Desktop.

### 3.4 Starting the Container Again

Once you have a container on your local machine, you can restart it using the following command:

```bash
docker start {id}/{name}
```

Remember that any tags specified when running the container in step 3.2 will remain when you start the container again.

### 3.5 Testing

#### 3.5.1 Checking if the Container is Running

To verify that your container is running, use the following command:

```bash
docker ps
```

Ensure your container is listed and running.

#### 3.5.2 Checking if the Server is Up

If the container is up and running, test it by making a GET request to [http://localhost:3000/]:

```bash
curl http://localhost:3000/
```

You should receive a "Hello World!" HTML file as a response.

### 3.6 BONUS: Deploying with the Reverse Proxy Server

#### 3.6.1 Docker Compose

You can run the docker compose file, which will automatically download the images of the web app and the reverse proxy server, put them in the same network, and define an auto-restart policy. The ports are already configured.

To run the docker compose file, use the following command:

```bash
docker compose up
```

You can repeat step [3.5.1](#351-check-if-the-container-is-running) to check if the containers are running. Repeat step [3.5.2](#352-check-if-the-server-is-up) to verify the server is running. To check if the reverse proxy server is also running properly, follow step [4.1](#41-bonus-reverse-proxy).

## 4. Usage

The server is configured to listen on port 3000. You can only request '/' as an endpoint, which will direct you to a "Hello World" page. Additionally, the server logs every request made to the console.

## 4.1 BONUS: Reverse Proxy

If you choose to run the server with the reverse proxy server, you can send requests without specifying the port since the reverse proxy server is listening on port 80.
```bash
curl http://localhost/
```