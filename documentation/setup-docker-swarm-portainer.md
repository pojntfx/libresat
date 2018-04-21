# Setup Docker Swarm and Portainer

## Install dependencies

```bash
sudo apt install docker.io docker-compose
```

## Setup master

```bash
docker swarm init --advertise-addr 192.168.178.44
```

## Setup worker(s)

```bash
docker swarm join \
    --token SWMTKN-1-0y1sku2b3adb9gd5kjwzgw9mti29jfbdn8j22eiv2jzciscx6j-6iqni5axvrpl643lb49yfdu2y \
    192.168.178.44:2377
```

## Setup dashboard

```bash
docker service create \
    --name portainer \
    --publish 9000:9000 \
    --constraint 'node.role == manager' \
    --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock \
    portainer/portainer \
    -H unix:///var/run/docker.sock
```

## Deploy service

Run the following in the service's git repository:

```bash
docker stack deploy -c docker-compose.yml opensdcp-gitea
```
