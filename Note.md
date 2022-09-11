nodejs不支持import语句，原因：nodejs采用的是CommonJS的模块化规范，使用require语句引入模块；而import是ES6的模块化规范关键字。
在nodejs中使用ES6语法必须通过babel等工具进行转义编译。出于对性能考虑（引入 babel 会加载更多的模块），选择依赖中最后一个支持 CommonJS 的包。

热门脚手架工具库：
commander           ：命令行自定义指令
inquirer            ：命令行询问用户问题，记录回答结果
chalk               ：控制台输出内容样式美化
ora                 ：控制台 loading 样式
figlet              ：控制台打印 logo
easy-table          ：控制台输出表格
download-git-repo   ：下载远程模版
fs-extra            ：系统fs模块的扩展，提供了更多便利的 API，并继承了fs模块的 API
cross-spawn         ：支持跨平台调用系统上的命令
util                ：util 模块中的 promisify 可对一些方法进行 promise 化


版本注意：
inquirer 最后一个支持 CommonJS 的版本：8.2.4
commander 仍在使用 CommonJS
chalk 最后一个支持 CommonJS 的版本：4.1.2
ora 最后一个支持 CommonJS 的版本：5.4.1
figlet 仍在使用 CommonJS
download-git-repo 仍在使用 CommonJS
fs-extra 仍在使用 CommonJS
util 仍在使用 CommonJS



以下是本项目所有依赖的版本命令：
npm install inquirer@8.2.4 --save-dev
npm install commander@9.4.0 --save-dev
npm install chalk@4.1.2 --save-dev
npm install ora@5.4.1 --save-dev
npm install figlet@1.5.2 --save-dev
npm install download-git-repo@3.0.2 --save-dev
npm install fs-extra@10.1.0 --save-dev
npm install util@0.12.4 --save-dev
