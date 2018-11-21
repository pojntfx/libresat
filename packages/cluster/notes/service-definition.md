# LibreSat Service Definition

A unit of functionality that solves an issue.

## Backend Core

The functionality of the service.

```plaintext
service-backend-core/
    src/
        # Generic functions
        utils/
            createUser.util.ts
            getUser.util.ts
            updateUser.util.ts
            deleteUser.util.ts
            createScope.util.ts
            getScope.util.ts
            updateScope.util.ts
            deleteScope.util.ts
            assignUserToScope.util.ts
            removeUserFromScope.util.ts
            index.ts
        # Tests for the functions
        tests/
            createUser.test.ts
            getUser.test.ts
            updateUser.test.ts
            deleteUser.test.ts
            createScope.test.ts
            getScope.test.ts
            updateScope.test.ts
            deleteScope.test.ts
            assignUserToScope.test.ts
            removeUserFromScope.test.ts
        # Mocks for the controllers
        tests/
            userController.mock.ts
            scopeController.mock.ts
            index.ts
        # Errors which can occur on the functions
        errors/
            createUser.error.ts
            getUser.error.ts
            updateUser.error.ts
            deleteUser.error.ts
            createScope.error.ts
            getScope.error.ts
            updateScope.error.ts
            deleteScope.error.ts
            assignUserToScope.error.ts
            removeUserFromScope.error.ts
            index.ts
        # Types of the models that the functions perform actions on
        @types/
            user.type.ts
            scope.type.ts
            index.ts
        index.ts
    TODO.md
    README.md
    package.json
```

## Backend Web

The machine web interface for the service.

```plaintext
service-backend-web/
    src/
        # Definitions of what actions are available
        typeDefs/
            user.typeDef.graphql
            scope.typeDef.graphql
        # What connectors the actions should correspond to
        resolvers/
            createUser.resolver.ts
            getUser.resolver.ts
            updateUser.resolver.ts
            deleteUser.resolver.ts
            createScope.resolver.ts
            getScope.resolver.ts
            updateScope.resolver.ts
            deleteScope.resolver.ts
            assignUserToScope.resolver.ts
            removeUserFromScope.resolver.ts
            index.ts
        # Connect validators, mappers and controllers
        connectors/
            createUser.connector.ts
            getUser.connector.ts
            updateUser.connector.ts
            deleteUser.connector.ts
            createScope.connector.ts
            getScope.connector.ts
            updateScope.connector.ts
            deleteScope.connector.ts
            assignUserToScope.connector.ts
            removeUserFromScope.connector.ts
            index.ts
        # Check the provided parameters against the core's types
        validators/
            createUser.validators.ts
            getUser.validators.ts
            updateUser.validators.ts
            deleteUser.validators.ts
            createScope.validators.ts
            getScope.validators.ts
            updateScope.validators.ts
            deleteScope.validators.ts
            assignUserToScope.validators.ts
            removeUserFromScope.validators.ts
            index.ts
        # Map the parameters into the internally used structure
        mappers/
            createUser.mapper.ts
            getUser.mapper.ts
            updateUser.mapper.ts
            deleteUser.mapper.ts
            createScope.mapper.ts
            getScope.mapper.ts
            updateScope.mapper.ts
            deleteScope.mapper.ts
            assignUserToScope.mapper.ts
            removeUserFromScope.mapper.ts
            index.ts
        # Connect actions the models
        controllers/
            user.controller.ts
            scope.controller.ts
            index.ts
        # Define the models in the database
        models/
            user.model.ts
            scope.model.ts
            index.ts
        index.ts
        start.ts
    TODO.md
    README.md
    package.json
```

## Frontend Core

The functionality to access the web interface of the service.

```plaintext
service-frontend-core/
    src/
        # Get data
        queries/
            getUser.query.graphql
            getScope.query.graphql
        # Perform actions
        mutations/
            createUser.mutation.graphql
            updateUser.mutation.graphql
            deleteUser.mutation.graphql
            createScope.mutation.graphql
            updateScope.mutation.graphql
            deleteScope.mutation.graphql
            assignUserToScope.mutation.graphql
            removeUserFromScope.mutation.graphql
        index.ts
    TODO.md
    README.md
    package.json
```

## Frontend Web

The human web interface for the service.

```plaintext
service-frontend-web/
    src/
        components/
            # Map URLs to pages
            routes/
                Home.route.ts
                Users.route.ts
                Scopes.route.ts
                Routes.route.tsx
                index.ts
            # Map providers to components
            pages/
                Home.page.ts
                Users.page.ts
                Scopes.page.ts
                index.ts
            # Expose queries and mutations
            providers/
                CreateUser.provider.tsx
                GetUser.provider.tsx
                UpdateUser.provider.tsx
                DeleteUser.provider.tsx
                CreateScope.provider.tsx
                GetScope.provider.tsx
                UpdateScope.provider.tsx
                DeleteScope.provider.tsx
                AssignUserToScope.provider.tsx
                RemoveUserFromScope.provider.tsx
                index.ts
        data/
            # Media
            assets/
                bg.webp
                icon.webp
                logo.webp
            # Configuration
            home.data.ts
            users.data.ts
            scopes.data.ts
        index.tsx
        index.html
        start.ts
    TODO.md
    README.md
    package.json
```

## Frontend Terminal

The human terminal interface for the service.

```plaintext
service-frontend-terminal/
    src/
        # Map actions to controllers
        nouns/
            user.noun.ts
            scope.noun.ts
            index.ts
        # Map actions to providers
        verbs/
            update.verb.ts
            upgrade.verb.ts
            connect.verb.ts
            status.verb.ts
            get.verb.ts
            apply.verb.ts
            delete.verb.ts
            index.ts
        # Expose queries and mutations
        providers/
            createUser.provider.ts
            getUser.provider.ts
            updateUser.provider.ts
            deleteUser.provider.ts
            createScope.provider.ts
            getScope.provider.ts
            updateScope.provider.ts
            deleteScope.provider.ts
            assignUserToScope.provider.ts
            removeUserFromScope.provider.ts
            index.ts
        index.ts
        start.ts
    TODO.md
    README.md
    package.json/
```
