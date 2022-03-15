```bash
$ docker build --rm --load -t cross-compiled:arm64 .
<a bunch of output>
$ docker run --rm cross-compiled:arm64
/home/app/node_modules/node-gyp-build/index.js:59
  throw new Error('No native build was found for runtime=' + runtime + ' abi=' + abi + ' platform=' + platform + libc + ' arch=' + arch)
  ^

Error: No native build was found for runtime=node abi=93 platform=linuxglibc arch=arm64
    at Function.load.path (/home/app/node_modules/node-gyp-build/index.js:59:9)
    at load (/home/app/node_modules/node-gyp-build/index.js:19:30)
    at Object.<anonymous> (/home/app/node_modules/microtime/index.js:1:43)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/home/app/index.js:1:19)
```
