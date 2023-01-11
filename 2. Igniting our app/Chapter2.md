# Day 2
## Notes!

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

**What is Hot Module Replacement?**
Hot Module Replacement (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things.

References:
- https://v1.parceljs.org/hmr.html#:~:text=Hot%20Module%20Replacement%20(HMR)%20improves,both%20JavaScript%20and%20CSS%20assets.
- https://webpack.js.org/concepts/hot-module-replacement/#:~:text=Hot%20Module%20Replacement%20(HMR)%20exchanges,by%20only%20updating%20what's%20changed.
- https://medium.com/js-imaginea/hot-module-replacement-8b634c2a4348


**List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.**
- HMR: Exchanges, adds, or removes modules while an application is running, without a full reload.
- Automatic code splitting: Parcel enables code splitting without needing configuration. This allows you to break up your application code into distinct bundles that can be loaded and cached in parallel, resulting in reduced initial bundle sizes and faster load times.
- Image optimization: Parcel includes an image transformer out of the box, which allows you to resize images, convert them to a different format, or adjust the quality to reduce file size. This can be done using query parameters when referencing the image, or using a configuration file.

**What is .gitignore? What should we add and not add into it?**
The .gitignore file is a text file that tells Git which files or folders to ignore in a project.

The types of files you should consider adding to a . gitignore file are any files that do not need to get committed. You may not want to commit them for security reasons or because they are local to you and therefore unnecessary for other developers working on the same project as you.

References:
- https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo/

**What is the difference between package.json and package-lock.json**
`package.lock.json` is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in `package.json`.

| package.json  | package.lock.json |
| ------------- | ------------- |
| It contains basic information about the project.  | It describes the exact tree that was generated to allow subsequent installs to have the identical tree.  |
| It is mandatory for every project.  | It is automatically generated for those operations where npm modifies either node_modules tree or package.json  |
| It records important metadata about the project. | It allows future devs to install the same dependencies in the project. |
| It contains information such as name, description, author, script, and dependencies. | It contains the name, dependencies, and locked version of the project. 
 |

~ or ^ in package.json file : These are used with the versions of the package installed.
- ~ : “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version.
- ^ : “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version.
If none of them is present , that means only the version specified in package.json file is used in the development.

References:
- https://www.geeksforgeeks.org/difference-between-package-json-and-package-lock-json-files/

**What is the difference between package.json and package-lock.json**
`package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

**What is node_modules ? Is it a good idea to push that on git?**
`node_modules` folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Node. js is trained to look for them there when you import them (without a specific path).

It is not a good idea to push `node_modules` on git, The downside is that you'll have a hard time scaling your app horizontally this way also it may happen that some dependencies change in the mean time.

References:
- https://medium.com/@chaitanyagiri/defending-my-choice-to-commit-node-modules-to-git-8eb02badd279#:~:text=The%20downside%20is%20that%20you,change%20in%20the%20mean%20time.

**What is the `dist` folder?**
The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

**What is browserslist?**
Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

References:
- https://browserslist.dev/
