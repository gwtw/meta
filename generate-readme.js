var fs = require('fs');

var repos = {
    'Data structures': [
        'csharp-data-structures',
        'growing-with-the-web',
        'js-data-structures',
        'js-avl-tree',
        'js-binary-heap',
        'js-binomial-heap',
        'js-fibonacci-heap',
        'js-heap-tests',
        'js-splay-tree',
        'py-data-structures',
        'ts-avl-tree',
        'ts-fibonacci-heap',
        'ts-splay-tree'
    ],
    'Sorting': [
        'csharp-sorting',
        'java-sorting',
        'js-sorting',
        'py-sorting',
        'ruby-sorting',
    ],
    'Interview questions': [
        'js-interview-questions',
    ],
    'Design patterns': [
        'java-design-patterns',
        'js-design-patterns',
    ]
};

var markdown =
    `## gwtw/meta\n` +
    `\n` +
    `This is a meta repo which is used as a dashboard for the repositories within the [gwtw](https://github.com/gwtw) organization.\n`;

for (var category in repos) {
    markdown +=
        `\n` +
        `### ${category}\n` +
        `\n` +
        `| Repo | Build status | Coverage | &nbsp;\n` +
        `|---|---|---|---\n`;
    repos[category].forEach(r => {
        markdown +=
            `| [${r}](https://github.com/gwtw/${r}) ` +
            `| [![Build Status](https://api.travis-ci.org/gwtw/${r}.svg?branch=master)](http://travis-ci.org/gwtw/${r}) ` +
            `| [![Coverage Status](https://coveralls.io/repos/github/gwtw/${r}/badge.svg?branch=master)](https://coveralls.io/github/gwtw/${r}?branch=master) ` +
            `| [Issues](https://github.com/gwtw/${r}/issues)\n`;
    });
}

fs.writeFileSync('./README.md', markdown);