# Step 1: Use the official lightweight Nginx image from Docker Hub
FROM nginx:alpine

# Step 2: Copy your static portfolio website files into Nginx's public html directory
COPY ./public /usr/share/nginx/html

# Step 3: Expose port 80 to allow external web traffic into the container
EXPOSE 80

# Step 4: Start Nginx in the foreground so the container stays active
CMD ["nginx", "-g", "daemon off;"]
