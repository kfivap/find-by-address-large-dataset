const db = require("./lib/db.js");
const makeId = require("./lib/makeId.js");

async function generate() {
    let dataToInsert = []
    for (let i = 0; i < 1 * 1000 * 1000 * 10; i++) {
        if (i && i % 1000 === 0) {
            console.log(i)
            await db('addresses').insert(dataToInsert)
            dataToInsert.length = 0
        }
        dataToInsert.push({
            address: makeId(36),
            is_swap: i % 2 === 0,
            company_id: '1'
        })
    }
}

generate()