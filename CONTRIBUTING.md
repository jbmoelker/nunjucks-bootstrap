# Contributing

The purpose of this project is providing easy reusable Nunjucks templates for Bootstrap components.


## Guidelines

### Pull Requests

For new additions or changes to the project, create a branch and submit a Pull Request.
Only add/change 1 module per Pull Request.

### Directory structure

Each module must have the following structure:

```
src/
└── module-name/
    ├── module-name.html
    ├── module-name.demo.html
    └── README.md
```



## Scripts

Development requires [Node.js](http://nodejs.org/) and [npm](https://npmjs.org/).

After installing dependencies using `npm install` the following scripts are available:

`npm run ...` | Description
---|---
`build` | Renders all source `*.demo.html` files to `dist/`.
`start` | Alias for `start:dev`.
`start:dev` | Starts a dev server on `http://localhost:65527` ("njkbs" in T9).
`start:dist` | Serves rendered `dist/` files on `http://localhost:65528`.