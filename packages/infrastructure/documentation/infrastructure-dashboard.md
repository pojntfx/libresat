# Infrastructure Dashboard Microservice

## Schema

```
Cloud {
    id
    name
    status
    clusters
    hosts
    ...openstack
}

Cluster {
    id
    name
    status
    nodes
    deployments
    ...kubernetes
}

Host {
    id
    name
    status
    ...maas
}
```

## Actions

> TODO: Add actions