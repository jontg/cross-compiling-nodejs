const benchmark = require('nodemark');
const os = require('os');

const microtime = require('microtime');

const nanoStart = process.hrtime.bigint()
const microStartMicroSeconds = BigInt(Date.now()) * BigInt(1000)

const NANO_PER_MICRO = BigInt(1_000)
const MICRO_PER_SECONDS = BigInt(1_000_000)

reimplementation = {
    nowStruct: function() {
        // const diff = process.hrtime(nanoStart)
        const diff = process.hrtime.bigint() - nanoStart
        const highResolutionDate = microStartMicroSeconds + diff / NANO_PER_MICRO

        const seconds = highResolutionDate / MICRO_PER_SECONDS
        const microseconds = highResolutionDate - seconds * MICRO_PER_SECONDS
        return [Number(seconds), Number(microseconds)]
    }
}

console.log(`Node ${process.version}`);
console.log(`CPU ${os.cpus()[0].model}`);

console.log('microtime:        ' + benchmark(microtime.nowStruct));
console.log('reimplementation: ' + benchmark(reimplementation.nowStruct));
