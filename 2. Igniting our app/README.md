# Day 2

Hello, so today we have achieved writing react code, without using CRA.

## Some Notes!

**What is `NPM`?**

NPM is a main package manager for node js, the standard command line tool to install Node.js dependencies, and also a public database of JavaScript packages available for download. Working with Node.js means we have a flourishing ecosystem of open source software and tools available. NPM helps us use these tools and libraries, enabling us to find, install, and manage them.

Reference: https://heynode.com/tutorial/what-npm/

**What is `Parcel/Webpack`? Why do we need it?**

Parcel/Webpack is a bundler, A bundler is a tool used to solve this latency issue by combining and merging your code into a single file.
Parcel.js is an open-source bundler. It supports many popular languages like Typescript and SASS, and can also handle file types like images and fonts.
Both parcel and webpack allow the following features -

- Minification
- Image compression
- HMR
- Feature flagging (flag builds as dev, prod)
- On top of this, we also get a development server, and diagnostics.

In addition to the above, Parcel also provides the following -

- File watcher algorithm - made with C++
- Cleaning our code (with the help of an additional package)
- Super fast building algorithm
- Caching while development
- Compression of code (code obfuscation)
- Old browser compatibility
- HTTPS in dev
- Different port numbers on builds on the same server but at the same time
- Consistent hashing algorithm
- Zero Configuration
- Automatic code splitting

**What is ‘.parcel-cache’?**

parcel-cache is a folder used by ‘parcel’ to reduce build times. As the name suggests, it is a cache. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-analyze everything from scratch. It's a key reason why ‘parcel’ might be slower during initial building but is so much faster than other bundlers for subsequent builds.

**What is `npx`?**

`npx` is a tool for executing Node packages. It is also a CLI tool whose purpose is to make it easy to install and manage dependencies hosted in the npm registry.

The `npx` stands for Node Package Execute and it comes with the npm, when you installed npm then automatically `npx` will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package. The `npx` is useful during a single time use package. If you have installed npm older version then `npx` is not installed in your system.

**## Q5. What is the difference between `dependencies` vs `devDependencies`?**

`devDependencies` are modules which are only required during development, while `dependencies` are modules which are also required at runtime. To save a dependency as a devDependency on installation we need to do an npm install --save-dev , instead of just an npm install --save.

**What is Tree shaking?**

Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

References:

- https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking

