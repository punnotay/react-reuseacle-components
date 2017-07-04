var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parse = require('react-docgen').parse;
var chokidar = require('chokidar');

var paths = {
    examples: path.join(__dirname,'../src', 'docs','examples'),
    components: path.join(__dirname, '../src', 'components'),
    output: path.join(__dirname, '../config', 'componentData.js')
};

const enableWatchMode = process.argv.slice(2) == '--watch';
console.log('watch mode: ' + enableWatchMode);

if (enableWatchMode) {
    chokidar.watch([path.examples, path.components]).on('change', 
            (event, path) => generate(paths));
}
else {
    generate(paths);
}

function generate(paths) {
    var error = [];
    var componentData = getDirectories(paths.components)
            .map(componentName => {
                try {
                    return getComponentData(paths, componentName);
                }
                catch(error) {
                    error.push(`Error occured while attemping to generate metadat for ${componentName}.  ${error}`);
                }
            });
    writeFile(paths.output, "module.exports=" + JSON.stringify(error.length ? error : componentData));
}

function getComponentData(paths, componentName) {
    var content = readFile(path.join(paths.components, componentName, componentName + '.js'));
    var info = parse(content);
    return {
        name: componentName,
        description: info.description,
        props: info.props,
        code: content,
        examples: getExampleData(paths.examples, componentName)
    }
}

function getExampleData(examplesPath, componentName) {
    var examples = getExampleFiles(examplesPath, componentName);
    return examples.map(file => {
        var filePath = path.join(examplesPath, componentName, file);
        var content = readFile(filePath);
        var info = parse(content);
        return {
            name: file.slice(0, -3),
            description: info.description,
            code: content
        };
    });
}

function getExampleFiles(examplesPath, componentName) {
    var exampleFiles = [];
    try {
        exampleFiles = getFiles(path.join(examplesPath, componentName));
    } catch(error) {
        console.log(chalk.red(`No examples found for ${componentName}`));
    }
    return exampleFiles;
}

function getDirectories(filepath) {
    return fs.readdirSync(filepath).filter(file => {
        return fs.statSync(path.join(filepath, file)).isDirectory();
    });
}

function getFiles(filepath) {
    return fs.readdirSync(filepath).filter(file => {
        return fs.statSync(path.join(filepath, file)).isFile();
    });
}

function writeFile(filepath, content) {
    fs.writeFile(filepath, content, err => {
        err ? console.log(chalk.red(err)) : console.log(chalk.green("Component data saved."));
    });
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}