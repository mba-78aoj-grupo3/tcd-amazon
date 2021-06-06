#!/bin/bash

chmod -R 777 consul/* && chmod -R 777 postgres/* && docker-compose up -d && docker exec -it consul-server1 sh script.sh
