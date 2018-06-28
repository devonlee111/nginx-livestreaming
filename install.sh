#!/bin/bash
apt update
apt upgrade
apt-get install build-essential libpcre3 libpcre3-dev libssl-dev
tar -xvf rtmp_nginx-1.15.0.tar
cd nginx-1.15.0
./configure --with-http_ssl_module --and-module=../nginx-rtmp-module
make
make install
cd ../
cp nginx.conf /usr/local/nginx/conf/
cp html/* /usr/local/nginx/html/
