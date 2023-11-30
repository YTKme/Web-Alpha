#!/bin/bash

# Build the docker image
docker build . --tag web/alpha

# Run the docker image
docker run --name web-alpha --detach --publish 8080:80 web/alpha
