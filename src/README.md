# Deploy

## Prerequisites

* Docker
* docker-compose

## Deploy

To deploy $x$ backend servers and $y$ frontend servers:

* ```docker-compose up --build --scale backend=x --scale frontend=y```

The app will be deployed to:

*  `http://localhost:8080`