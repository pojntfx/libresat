# Dashboard Layout Microservice

## Schema

```
Layout {
    id
    name
    items
}
```

## Actions

* allLayouts --> Layout[]
* service(id) --> Layout
* createLayout(name, endpoint) --> Layout
* deleteLayout(id) --> Layout
* updateLayout(id, name, items) --> Layout