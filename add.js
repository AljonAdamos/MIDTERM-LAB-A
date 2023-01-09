const fs = require('fs')

const cmd = process.argv

const get = function(dataContent){
    const content = JSON.parse(dataContent)

    let val1 = content[0][cmd[2]]
    let val2 = content[1][cmd[2]]
    let val3 = content[2][cmd[2]]
    let val4 = content[3][cmd[2]]

    console.log("Employee: " + val1 + ", "+ val2 + ", "+ val3 + ", "+ val4) 
}
module.exports = get