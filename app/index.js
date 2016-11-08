'use strict';

const cp = require('child_process');
const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

let username = ' ';
let email = ' ';

try {
  username = cp.execSync('git config user.name').toString();
  email = cp.execSync('git config user.email').toString();
} catch (e) {
  /* istanbul ignore next */
  console.error('Missing git configuration');
}

const camelCase = require('camelcase');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      `Behold the almighty ${chalk.red('generator-cheminfo')} generator!`
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: path.basename(this.destinationRoot()) // Default to current folder name
    }, {
      type: 'list',
      name: 'org',
      message: 'Organization',
      choices: ['ml', 'cheminfo-js'],
      default: 'ml' // Default to current folder name
    }, {
      type: 'input',
      name: 'userName',
      message: 'Your name',
      default: username.substring(0, username.length - 1),
      store: true
    }, {
      type: 'input',
      name: 'email',
      message: 'Your email',
      default: email.substring(0, email.length - 1),
      store: true
    }, {
      type: 'input',
      name: 'description',
      message: 'Your package description'
    }, {
      type: 'input',
      name: 'version',
      message: 'Your package version',
      default: '0.0.1'
    }, {
      type: 'confirm',
      name: 'coveralls',
      message: 'Do you want to install coverage tool?',
      default: false
    }, {
      type: 'confirm',
      name: 'runkit',
      message: 'Do you want to create a Runkit file example?',
      default: false
    }, {
      type: 'confirm',
      name: 'install',
      message: 'Run NPM install?'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.name;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var camelName = camelCase(this.props.name);
    var includes = {
      name: this.props.name,
      userName: this.props.userName,
      email: this.props.email,
      version: this.props.version,
      description: this.props.description,
      date: year + '-' + month + '-' + day,
      year: year,
      camelName: camelName,
      coveralls: this.props.coveralls,
      runkit: this.props.runkit
    };

    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('eslintrc.yml'), this.destinationPath('.eslintrc.yml'));
    this.fs.copy(this.templatePath('eslintrc.test.yml'), this.destinationPath('test/.eslintrc.yml'));

    this.fs.copyTpl(this.templatePath('test'), this.destinationPath('test/test.js'), includes);
    this.fs.copyTpl(this.templatePath('index'), this.destinationPath('src/index.js'), includes);
    this.fs.copyTpl(this.templatePath('runkit'), this.destinationPath('runkit.js'), includes);
    this.fs.copyTpl(this.templatePath('travis.yml'), this.destinationPath('.travis.yml'), includes);

    switch (this.props.org) {
      case 'ml':
        this.fs.copyTpl(this.templatePath('ml/LICENSE'), this.destinationPath('LICENSE'), includes);
        this.fs.copyTpl(this.templatePath('ml/npm'), this.destinationPath('package.json'), includes);
        this.fs.copyTpl(this.templatePath('ml/README.md'), this.destinationPath('README.md'), includes);
        break;
      case 'cheminfo-js':
        this.fs.copyTpl(this.templatePath('cheminfo-js/LICENSE'), this.destinationPath('LICENSE'), includes);
        this.fs.copyTpl(this.templatePath('cheminfo-js/npm'), this.destinationPath('package.json'), includes);
        this.fs.copyTpl(this.templatePath('cheminfo-js/README.md'), this.destinationPath('README.md'), includes);
        break;
      /* istanbul ignore next  */
      default:
        throw new Error('Unsupported organization');
    }
  },

  install: function () {
    /* istanbul ignore else  */
    if (this.props.install) {
      this.npmInstall();
    }
  }
});