const db = require("./lib/db");
const makeId = require("./lib/makeId");

async function getByAddressBatch() {
    for (let i = 0; i < 10; i++) {
        const start = Date.now()
        const result = await db('addresses').where('address', makeId(36))
        console.log(i, `${result.length} random address found in ${Date.now() - start} ms`)
    }
    const exist = await db('addresses').offset(10000).limit(10)
    for (const address of exist) {
        const start = Date.now()
        const result = await db('addresses').where('address', address.address).first()
        console.log(address.address, `${!!result} exist address found in ${Date.now() - start} ms`)
    }
    process.exit()

}
getByAddressBatch()