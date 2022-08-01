const db = require("./lib/db");
const makeId = require("./lib/makeId");

async function getByAddressBatch() {
    for (let i = 0; i < 10; i++) {
        const addresses = new Array(1000).fill(makeId(36), 0, 1000)
        const start = Date.now()
        const result = await db('addresses').whereIn('address', addresses)
        console.log(i, `${result.length} of ${addresses.length} random address found in ${Date.now() - start} ms`)
    }
    const addressesExist = []
    const exist = await db('addresses').limit(10000)
    for (const address of exist) {
        addressesExist.push(address.address)
    }

    const chunkSize = 1000;
    for (let i = 0; i < addressesExist.length; i += chunkSize) {
        const chunk = addressesExist.slice(i, i + chunkSize);
        const start = Date.now()
        const result = await db('addresses').whereIn('address', chunk)
        console.log(i, `${result.length} of ${chunk.length}  exist address found in ${Date.now() - start} ms`)
    }
    process.exit()
}
getByAddressBatch()