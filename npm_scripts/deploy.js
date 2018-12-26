var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    port: 21,
    localRoot: __dirname + '/build',
    remoteRoot: '/',
   	include: ['*', '**/*'],
    deleteRemote: true,
    forcePasv: true
}
 
// use with promises
await ftpDeploy.deploy(config)
    .then(res => console.log('finished:', res))
    .catch(err => console.log(err))