const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

if(cluster.isMaster){
    console.log('Master Process ID is '+process.pid)
    for(let i=0; i<numCPUs; i++){
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid} worker is stopped`)
        console.log('code', code, 'signal', signal)
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.write('<h1>hello node</h1>')
        res.end('<p>Hello cluster</h1>')
        setTimeout(() => {
            process.exit(1)
        }, 1000)
    }).listen(8086)
    console.log(`${worker.process.pid} worker is working`)
}