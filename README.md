# Ubi - Pavonine Backend 

Ubi is the back end for the open source task management software Pavonine.
If you want to sync between multiple devices, use Ubi to host your data on the server and connect via flora to manage your tasks!


# Features:
- GraphQL based backend
- Simple API
- Uses SQLite for storing tasks

## Planned Features:
- Encryption & Anonymity options
- Multiple users and tasklists
- User & Tasklist Privileges for administration
- Support for ActivityPub, so that users from different nodes can interact with the tasklist

# Development

Currently Ubi is undergoing a lot of development so contributions are welcome.

For local development you need these software installed:
- NodeJS & NPM
- make
- watch

To develop ubi locally follow the following steps:

- Clone the repository
```
git clone https://gitlab.com/Pavonine/ubi.git
cd ubi
```

- Install nodemodules

```
npm install
```

- Start watching for changes

```
npm run watch
```

- Start the local server for testing in a seperate shell

```
npm run serve
```

# Deployment

- Clone the repository
```
git clone https://gitlab.com/Pavonine/ubi.git
cd ubi
```

- Install nodemodules

```
npm install
```

- Build the server

```
npm run build
```

- Start the local server

```
npm run serve
```


# License
Pavonine and all of it's software is released under AGPL-3.0 License.
Please check the LICENSE file for more information.
