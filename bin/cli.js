#!/usr/bin/env node
const program = require('commander')
const figlet = require('figlet')
const chalk = require('chalk')
const libCreate = require('../lib/create')

program
.version('1.0.0')
.command('create <app-name>')      // [name]: 非必填，<name>：必填
.description('创建一个新项目(create a new project)')
.option('-f, --force', '是否强制覆盖已存在的目录？(overwrite target directory if it exist)')    // 是否强制创建，当文件夹已经存在
.action((name, options) => {
    // 打印命令行输入的值
    libCreate(name, options)
})

program
.on('--help', () => {   // 监听 --help 执行
    // 使用 figlet 绘制 Logo
    console.log('\r\n' + figlet.textSync('leo gulp4', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));

    // 新增说明信息
    console.log(`\r\nRun ${chalk.cyan(`lg4 <command> --help`)} for detailed usage of given command\r\n`)
})


program.parse()
