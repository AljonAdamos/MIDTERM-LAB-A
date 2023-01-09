const fs = require('fs')
const read = require('./read')
const add = require('./add')

const cmd = process.argv

if(cmd[2] == 'employee') {
    var dataContent = read()
    let key = cmd[2]
    add(dataContent) 
}


if(cmd[2] == 'role') {
    var dataContent = read()
    let key = cmd[2]
    add(dataContent) 
}

if(cmd[2] == 'department') {
    var dataContent = read()
    let key = cmd[2]
    add(dataContent) 
}