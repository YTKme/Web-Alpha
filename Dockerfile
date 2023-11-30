# syntax=docker/dockerfile:1
FROM debian:bookworm-slim

# Update
RUN apt-get -y update && apt-get -y upgrade

# Install NGINX
RUN apt-get -y install nginx

# Listen on Port 80
EXPOSE 80

# Copy NGINX Configuration
# COPY ./nginx/conf.d/alpha.conf /etc/nginx/conf.d/alpha.conf

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
