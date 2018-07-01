Hello,

This respository includes:

1. A Node.js app that keeps a counter for the overall number of POST (on the root URL) requests it receives, each POST request increases the counter by 1, and when performing a GET request (on the root URL) it returns the overall number of POST requests the server has received (the counter's current value).

In order to start the server:
i. npm install
ii. npm start


2. Dockerfile which through docker commands will build a docker image and when running this docker image our Node.js server will run inside the docker container.
Commands for building and running the docker container with our node server:

i. $ docker build -t <name> .
ii. $ docker run -p 3000:300 -d <name>


3. Jenkinsfile which tells Jenkins where to find our code and what are the credentials to use in order to publish the docker image.


