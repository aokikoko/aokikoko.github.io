
### Installation

```
cd website
$ yarn
```

or

```
$ npm i
```

### Local Development

```
$ yarn start
```

or

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
该命令将帮助你开启本地服务并自动打开浏览器窗口, 大多数更改都是实时反映的，无需重新启动服务器。

### Build

```
$ yarn build
```

or

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
这个命令将静态内容生成到`dist`目录中，并且可以使用任何静态内容托管服务。

### Deployment

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
使用`GitHub pages`托管, 推送到`gh-pages`分支