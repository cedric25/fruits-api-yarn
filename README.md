# try-yarn-workspaces

*This is a rewrite of https://github.com/cedric25/try-ts-fastify-prisma*

My goal here was to give Prisma Client its own separate package, in order for it to be used
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

Start TypeScript watch:
`$ yarn workspace @fruits/server watch`

Open a new terminal and run server:  
`$ yarn workspace @fruits/server dev`

ℹ️ Note in `.yarnrc.yml` that we are not using [Yarn PnP mode](https://yarnpkg.com/features/pnp): `nodeLinker: node-modules`
(Which is *not yet* compatible with Prisma?)

ℹ️ Note in `.gitignore` that we are not using [Yarn "Zero Install" mode](https://yarnpkg.com/features/zero-installs): `#!.yarn/cache`

## To improve

 - [ ] Find a better way to handle `_moduleAliases` config
(Not nice to keep it in the root `package.json`)

## To do

 - Work on CI / CD

## Useful resources

 - "Scaling out JavaScript Monorepos with Yarn Workspaces" by Tomas Fernandez  
*Apr 2021*  
👉 https://semaphoreci.com/blog/javascript-monorepos-yarn-workspaces

 - "Typescript: Working with Paths, Packages and Yarn Workspaces" by Ross Bulat  
*June 2019*  
👉 https://rossbulat.medium.com/typescript-working-with-paths-packages-and-yarn-workspaces-6fbc7087b325

 - A Github project template by alitnk  
*Oct 2021*  
👉 https://github.com/alitnk/nest-prisma-monorepo
