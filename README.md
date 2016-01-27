## NPM-Prototype

This is a proof of concept for using many npm-packages to share code and
manage dependencies.


For example, to create an implemetation with 2 widgets (widget-a,
widget-b)

## Setup

```bash
$ npm run setup
```
## Server
```bash
$ npm run start
````

## Configure
Edit build.config.js to choose which widgets are built.

```javascript
{
  "packages": [
    {"name": "widget-a", "options": [] },
    {"name": "widget-b", "options": [] }
  ]
}
```

