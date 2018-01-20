var fs = require('fs');

var repos = [
    'ts-fibonacci-heap'
];

var markdown =
    '## gwtw/meta\n' +
    '\n' +
    'This is a meta repo which is used as a dashboard for the repositories within the [gwtw](https://github.com/gwtw) organization.\n' +
    '\n' +
    '### Data structures\n' +
    '\n' +
    '| Repo | Build status | Coverage | &nbsp;\n' +
    '|---|---|---|---\n';

repos.forEach(r => {
    markdown +=
        `| [${r}](https://github.com/gwtw/${r}) ` +
        `| [![Build Status](https://api.travis-ci.org/gwtw/${r}.svg?branch=master)](http://travis-ci.org/gwtw/${r}) ` +
        `| [![Coverage Status](https://coveralls.io/repos/github/gwtw/${r}/badge.svg?branch=master)](https://coveralls.io/github/gwtw/${r}?branch=master) ` +
        `| [Issues](https://github.com/gwtw/${r}/issues)\n`;
});

fs.writeFileSync('./README.md', markdown);