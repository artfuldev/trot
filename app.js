/* Command Line Parser */
const program = require('commander')
const fs = require('fs')
const readline = require('readline');

/*  Create Options list from command lines */
program
  .version('0.0.1')
  .option('-c, --componentName [name]', 'Create Component Named [Layout]', 'layout')
  .parse(process.argv);

//if component flag set (also should be default)
if (program.componentName) {
  console.log('   Creating a component named: ', program.componentName);

  //open template file
  templateDir = './templates/'
  templateFileName = templateDir + 'reactComponentES5'


  fs.readFile(templateFileName, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/\[comp\]/g, program.componentName);
    var outputName = program.componentName + '.js'

    fs.writeFile(outputName, result, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });


}

