# try-yarn-workspaces

My goal was to give the Prisma Client its own separate package, in order for it to be used
in more than just one backend.

`packages/prisma`: Prisma schema, migration scripts, Prisma client creation

`packages/server`: fastify server for the Fruits API, using the above Prisma client

## Startup

Be sure you're running the latest Yarn version:  
`$ yarn set version berry`  
(3.2.0 at the time of writing)

`$ yarn install`

Build 'prisma' package and generate Prisma client (the actual Prisma client + its types)  
`$ yarn workspace @fruits/prisma run build`

Run server:  
`$ yarn workspace @fruits/server run dev`

ℹ️ Note in `.yarnrc.yml` that we are not using Yarn PnP mode: `nodeLinker: node-modules`

ℹ️ Note in `.gitignore` that we are not using [Yarn "Zero Install" mode](https://yarnpkg.com/features/zero-installs): `#!.yarn/cache`

## To improve

 - [ ] Move root package.json `_moduleAliases` config