const http = require('http');
const ConsulConfig = require('./consul');
const consul = new ConsulConfig();

http.createServer(async (req, res) => {
    const {url, method} = req;

    //Test health check
    if (url === '/health') {
        res.end('OK!');
    }

    //Test dynamic read data
    if (method === 'GET' && url === '/user/info') {
        const user = await consul.getUserConfig();
        Res.end (` Hello, I am ${user. Name} this year ${user. Age} ');
    }

    //Test data update
    if (method === 'POST' && url === '/user') {
        try {
            Await consumer. Setuserconfig ('age ', 18) // change age to 18
            res.end('OK!');
        } catch (err) {
            console.error(err);
            res.end('ERROR!');
        }
    }
}). Listen (3000, '192.168.1.8'); // 192.168.20.193 is my local intranet IP, which can be viewed through ifconfig