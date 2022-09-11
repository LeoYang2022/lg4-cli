const ora = require('ora')
const util = require('util')
const downloadGitRepo = require('download-git-repo')    // 不支持 Promise
const path = require('path')
const chalk = require('chalk')

class Generator {
    constructor(name, targetDir) {
        // 目录名称（也是项目名）
        this.name = name;
        // 创建位置
        this.targetDir = targetDir;

        this.downloadGitRepo = util.promisify(downloadGitRepo);
    }

    // 核心创建逻辑，下载模板到模板目录
    async create() {
        // 使用 ora 初始化
        const spinner = ora('等待下载模板(waiting download template)');     // 加载提示信息
        // 开始加载动画
        spinner.start();

        try {
            await this.downloadGitRepo(
                'direct:https://github.com/LeoYang2022/leo-gulp4x.git#master',     // 参数1: 下载地址
                path.resolve(process.cwd(), this.targetDir),     // 参数2: 创建位置
                { clone: true }     // 参数3：相关配置
            )

            // 状态为修改为成功
            spinner.succeed();

            // 模板使用提示
            console.log(`\r\n项目:  ${chalk.cyan(this.name)} 创建成功 (Successfully created project)`)
            console.log(`\r\n  cd ${chalk.cyan(this.name)}`)
            console.log(`${chalk.green('  npm install')}`)
            console.log(`${chalk.green('  npm run gulp\r\n')}`)
        } catch(error) {
            console.log('\r\n')
            console.log(error)
            // 状态为修改为失败
            spinner.fail('项目拉取失败(Request failed, refetch ...)')
        }
    }
}

module.exports = Generator;
