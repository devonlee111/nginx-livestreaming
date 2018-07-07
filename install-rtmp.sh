#!/bin/bash
apt update
apt upgrade
apt-get -y install build-essential libpcre3 libpcre3-dev libssl-dev
tar -xvf nginx-rtmp-server.tar.gz
cd nginx-1.15.0
./configure --with-http_ssl_module --add-module=../nginx-rtmp-module
make
make install
cd ../
cp nginx.conf /usr/local/nginx/conf/
cp html/* /usr/local/nginx/html/
