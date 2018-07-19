var fs = require('fs');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const targetDir = './dist';
const copy = (src, dest) => fs.writeFileSync(dest || (targetDir + '/' + src), fs.readFileSync(src));
const read = src => fs.readFileSync(src).toString('utf8');
const write = (dest, data) => fs.writeFileSync(targetDir + '/' + dest, Buffer.from(data, 'utf8'));
const readJSON = src => JSON.parse(read(src));
const writeJSON = (dest, data) => write(dest, JSON.stringify(data, null, 2));
const tasks = {
    tasks:[],
    add: (name, fn) => {
        tasks.tasks.push({
            name: name,
            run: fn
        });
    },
    run: () => {
        console.log('');
        console.log('running dist');
        console.log('---------------------');
        tasks.tasks.every(task => {
            console.log('' + task.name);
            try {
                task.run();
                return true;
            } catch (ex) {
                console.error(ex);
                return false;
            }
        })
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

tasks.add('copy readme and license', () => {
    copy('LICENSE');
    copy('README.md');
    copy('screenshot.png');
});

tasks.add('setup package.json', () => {
    var packageJSON = readJSON('package.json');

    packageJSON.main = './index.js';
    packageJSON.typings = './index.d.ts';
    packageJSON.scripts = undefined;
    packageJSON.nyc = undefined;
    packageJSON.devDependencies = undefined;

    writeJSON('package.json', packageJSON);
});

tasks.add('setup typings', () => {
    var data = read('./src/index.d.ts');
    var exportFound = false;
    read('./src/index.ts').split(/([\r|\n]+)/g).forEach(line => {
        exportFound = exportFound || /(^|\s)export[\s]+declare[\s]+/.test(line);
        if (exportFound) {
            data += line;
        }
    });
    write('index.d.ts', data);
});

tasks.run();