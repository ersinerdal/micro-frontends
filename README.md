# Micro Frontends #

### A micro frontends project consist of react, vue.js, angular and angular-js ###

##### This project uses lerna to manage multiple packages

Please install lerna first 

```
npm install --global lerna
```


To install all the dependencies

```
lerna bootstrap
```

Angularjs project requires bower components too
```
cd packages/angularjs
bower install
```

To run all the packages

```
lerna run start --parallel
```
