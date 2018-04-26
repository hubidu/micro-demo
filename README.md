zeit micro demo repository
==========================

https://github.com/zeit/micro
https://github.com/amio/awesome-micro

## Projects

- 1 Hello World: Simplistic 'Hello World'
- 2 Test it: Hello world with a test
- 3 Calling an external service: Call the weather api
- 4 Routing: Show one possibility to do routing. More express like options are also available
- 5 Hoofs: Use higher order functions as global and local middleware. Test cross-stack or individual functions

## PROs

- Simple and elegant: "Everything is a function"
- Composable
- Better testability: 
    * Just return the data instead of calling res.json(...). 
    * Just throw an exception instead of res.status(...).json(...)
    * Just compose functions instead of proprietary middleware hooks
- Lightweight (claims to be, but IMHO also feels more lightweight compared to express)
- No callbacks (like in express middleware)
- More explicit, less magic
- "Poor man's lambda functions"
- Interesting idea: Use the file system as router https://github.com/jesseditson/fs-router

## CONs

- Not all the plugins might work together seamlessly
- Not so much different from express, koa...

