#!/bin/bash
apt update
apt upgrade
apt-get -y install build-essential libpcre3 libpcre3-dev libssl-dev
tar -xvf nginx-ts-server.tar.gz
cd nginx-1.15.0
./configure --add-module=../nginx-ts-module
make
make install
cd ../
mv nginx.conf /usr/local/nginx/conf/
mv html/* /usr/local/nginx/html/
