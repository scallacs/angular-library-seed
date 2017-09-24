NOT DONE YET !

# Angular Library Seed

Seed for an angular library

## Main features

- Demo application with example and API documentation
- Code coverage
- Unit testing
- E2E testing
- Angular CLI project
- NPM integration for publishing your library 
- Travis integration for continuous integration

## Getting started

```shell
# Clone this repo 
git clone https://github.com/scallacs/angular-library-seed your-lib-name`
cd your-lib-name

# Install dependencies
npm install

# [optional] remove git files and add your own 
rimraf .git

# Change library name
# TODO 
```

### Adding an angular library component|pipes|module ...

You can use angular-cli code scaffolding. 
`ng generate directive|pipe|service|class|guard|interface|enum|module`. 

See `ng help` for the complete list.

1) Use angular-cli to generate your component 
```shell
ng generate component --app lib YourComponentName
```

2) Add corresponding demo for the component
TODO

***Notes***: *Do not forget to add option `--app lib` to generate something in the library and `--app demo` for the demo.*


## Library 

### Publish your library

Be sure to complete the proper informations in [package.json](package.json);

```npm publish```

### Help

See further instructions in [./lib/README.md](./lib/README.md)

## Demo

Run `ng serve --app demo` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

See further instructions in [./demo/README.md](./demo/README.md)

## License

MIT

## Inspiration

[https://github.com/ng-bootstrap/ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap)