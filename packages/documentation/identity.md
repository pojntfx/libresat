# Identity Microservice

## Schema

```
Identity {
    id
    name
    email
    password
    token
}
```

## Actions

* register(name, email, password) --> Identity
* login(name, email, password) --> Identity
* logout(id) --> Identity
* deleteIdentity(id) --> Identity 
* identity(id) --> Identity
* updateIdentity(id, name, email, password) --> Identity