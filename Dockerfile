FROM nginx:alpine

ADD public /usr/share/nginx/html
ADD dist /usr/share/nginx/html

ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]