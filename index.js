const moment = require('moment')
const exec = require('child_process').exec;
const argv = process.argv.slice(2);

let startdate

if (argv.length < 1 || argv.length > 2) {
    console.log(`Error: bad input`)
    process.exit()
}

if (argv.length === 1) {
    startdate = moment().format('YYYY-MM-DD HH:mm:ss')
}

if (argv.length === 2) {
    startdate = argv[1]
}

const getRandomInt = (min, max) => Math.min(max, Math.floor(Math.random() * (max - min + 1) + min))
const getDate = (n, startdate, random = false) => {
    return moment(startdate).subtract({
        days: n,
        hours: (random) ? getRandomInt(6, 23) : 0,
        minutes: (random) ? getRandomInt(0, 59) : 0,
        seconds: (random) ? getRandomInt(0, 59) : 0,
    }).format('LLLL')
}

for (let i = 0; i <= argv[0]; i++) {
    let curdate = getDate(i, startdate, true)
    let numberCommits = getRandomInt(0, 10)

    for (let b = 0; b <= numberCommits; b++) {
        setTimeout(() => {
            // console.log("test")
            exec(`echo '${curdate}  ${getRandomInt(0, 1000000)}' > simulator.txt; git add simulator.txt; GIT_AUTHOR_DATE='${curdate}' GIT_COMMITTER_DATE='${curdate}' git commit -m 'update';`)
        }, 550 * i);

    }

    setTimeout(() => {
        exec(`git rm simulator.txt; git commit -m 'delete';`)
    }, 0 * i);
    console.log(`Processing: ${i}/${argv[0]}`)
}