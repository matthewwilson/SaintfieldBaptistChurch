var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();
 
var config = {
    user: process.ENV.FTP_USER,
    password: process.ENV.FTP_PASSWORD,
    host: process.ENV.FTP_HOST,
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