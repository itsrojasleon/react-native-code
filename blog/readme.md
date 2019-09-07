<div align="center">
<h1>Blog</h1>
Create, read, update and delete blogs from a React Native Application
</div>

<hr />

<img src="https://raw.githubusercontent.com/rojasleon/react-native-code/own-blog/blog/examples/blog.png" width="1000" />

## System Requirements

- [git](https://git-scm.com/) v2 or greater
- [NodeJS](https://nodejs.org/en/) v10 or greater
- [yarn](https://yarnpkg.com/lang/en/) v1 or greater (or [npm][npm] v6 or greater)
- [expo](https://expo.io/) v3 or greater

All of these must be available in your `PATH`. To verify things are set up

```shell
git --version
node --version
yarn --version # or npm --version
expo --version
```

## Download

You can clone this repo with

```shell
git clone git@github.com:rojasleon/react-native-code.git
```

or download the ZIP file

## Setup server

You need this [JSON Server project](https://github.com/rojasleon/react-native-code/tree/master/jsonserver), check the readme file to make that work.

## Setup client

Copy a new url from ngrok and put it in `src/api/jsonServer.js`

```shell
yarn install
yarn start
```

If you want to run the ios simulator you can run it pressing `i` or `a` for android

## License

MIT
