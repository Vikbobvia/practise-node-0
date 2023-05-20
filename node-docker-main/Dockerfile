#Pull node, phiên bản 15
FROM node:15 

#Địa chỉ đến trong node
WORKDIR /app

#Copy file package.json từ máy chính sang node app
COPY package.json .


#Pass vào biến NODE_ENV khi chạy chương trình
ARG NODE_ENV

# Lệnh bash chèn vào khi khởi động
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

#Copy các file ( ngoại trừ ở .dockerignore sang node app)
COPY . ./

#Báo có ENV có port 3000
ENV PORT 3000

#Thông báo mở port
EXPOSE $PORT

#Chạy lệnh khi hoàn tất ( nếu ko có thay đổi ở docker-compose)
CMD ["node", "index.js"]