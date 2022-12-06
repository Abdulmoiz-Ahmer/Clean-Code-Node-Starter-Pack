#! bin/bash

#Removing everything if already exists
docker stop postgresql-container && docker rm postgresql-container

# Running the postgres container
docker run --name postgresql-container -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=53cr3t -v /var/lib/postgresql/data -d postgres:12-alpine
sleep 20
docker exec -it postgresql-container createdb --username=root --owner=root database_development_starter_pack