# Service Discovery Microservice

## Schema

```
Service {
    id
    name
    endpoint
}
```

## Actions

* allServices --> Service[]
* service(id) --> Service
* createService(name, endpoint) --> Service
* deleteService(id) --> Service
* updateService(id, name, endpoint) --> Service