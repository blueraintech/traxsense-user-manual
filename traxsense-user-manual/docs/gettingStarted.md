# Quick Start

If you want to get started immediately, then heres what you need to configure

## Requirements

- [docker](https://docker.com/)
- [docker-compose](https://docker.com/)

## Configure docker-compose.yml file

```bash
version: '3.6'
services:

 mssql:
   container_name: mssql
   image: mcr.microsoft.com/mssql/server:latest
   restart: unless-stopped
   volumes:
     - ./volumes/mssql/data:/var/opt/mssql/data
   environment:
     ACCEPT_EULA: "Y"
     # MSSQL_PID: Developer
     SA_PASSWORD: "ThisIsATest@1"
   ports:
     - 1433:1433

 traxsense:
   image: tools.bluerain.tech/traxsense:3383
   container_name: traxsense
   restart: unless-stopped
   healthcheck:
     test: curl --fail -s http://localhost/app/ || exit 1
     interval: 1m
     timeout: 10s
     retries: 3
   volumes:
     - ./volumes/traxsense/config:/var/opt/traxsense/config
     - ./volumes/traxsense/logs:/var/opt/traxsense/logs
     - ./volumes/traxsense/data:/var/opt/traxsense/data
   ports:
     - 80:80
   environment:
     TRAXSENSE_DB: "server=mssql; port=25060; database=Traxsense; user=sa; password=ThisIsATest@1"
     TRAXSENSE_DB_TYPE: "MSSQL"
     TRAXSENSE_JOB_RUNNER: 1


 eventbridge:
   image: tools.bluerain.tech/eventbridge:3383
   container_name: eventbridge
   restart: unless-stopped
   healthcheck:
     test: curl --fail -s http://localhost:5000/health || exit 1
     interval: 1m
     timeout: 10s
     retries: 3
   volumes:
     - ./volumes/eventbridge/config:/var/opt/eventbridge/config
     - ./volumes/eventbridge/logs:/var/opt/eventbridge/logs
     - ./volumes/eventbridge/data:/var/opt/eventbridge/data
   ports:
     - 5000:5000
   environment:
     INSTANCE_ID: EVENTBRIDGE-1
     TRAXSENSE_DB_TYPE: MSSQL
     TRAXSENSE_DB: "server=mssql; port=25060; database=Traxsense; user=sa; password=ThisIsATest@1"
```

## Start development server

```bash
docker-compose up -d
```
