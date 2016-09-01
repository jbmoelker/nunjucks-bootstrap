# Contributing

The purpose of this project is providing easy reusable Nunjucks templates for Bootstrap components.


## Guidelines

### Pull Requests

For new additions or changes to the project, create a branch and submit a Pull Request.
Only add/change 1 module per Pull Request.

### Naming conventions

* Use Bootstrap's component names.
* Use lowercase-with-hyphens notation for filenames, HTML attributes and CSS classes.

### Directory structure

Each module must have the following structure:

```
src/
└── module-name/
    ├── module-name.html
    ├── module-name.demo.html
    └── README.md
```

### Structure macros

All Nunjucks macros should be easy to reuse and replace. Therefore all macros should be small and have a single purpose.
View existing modules / macros to see just how small macros can be.

### Document macros

Each module must have a `README.md` with the following structure:

```markdown
# [Module name]

## Functionality

[Describe what the module does for normal humans. Avoid tech words]
[Link to documentation of module on getbootstrap.com]

## Usage

[Describe the API of the module. As a developer how do I use it?]
```

See [nav/breadcrumb](src/nav/breadcrumb/) as an example.


### Add module demo

Each module must have a demo. A demo serves as visual documentation for developers, designers and others.
Demos ensure others understand all the variations a module can be used in. Thus preventing others from accidentally breaking different uses.

You can use the following template:

```html
{% extends "demo/module/module.html" %}
{% import "./module-name.html" as moduleName %}

{% block content %}
<demo aria-label="module name with 1 item">
    {{ moduleName.list('hello') }}
</demo>
<demo aria-label="module name with multiple items">
    {{ moduleName.list(['hello', 'world']) }}
</demo>
```

See [demo/module](src/demo/module/) for more info.


## Scripts

Development requires [Node.js](http://nodejs.org/) and [npm](https://npmjs.org/).

After installing dependencies using `npm install` the following scripts are available:

`npm run ...` | Description
---|---
`build` | Renders all source `*.demo.html` files to `dist/`.
`start` | Alias for `start:dev`.
`start:dev` | Starts a dev server on `http://localhost:65527` ("njkbs" in T9).
`start:dist` | Serves rendered `dist/` files on `http://localhost:65528`.