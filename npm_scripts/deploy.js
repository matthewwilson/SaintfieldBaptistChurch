const path = require('path')
const SftpUpload = require('sftp-upload')

var options = {
    host: process.env.FTP_HOST,
    username: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    port: 1050,
    path: path.join(__dirname, '..', '/build'),
    remoteDir: 'public_html'
}

sftp = new SftpUpload(options);

sftp.on('error', function(err) {
    throw err;
})
.on('uploading', function(progress) {
    console.log('Uploading', progress.file);
    console.log(progress.percent+'% completed');
})
.on('completed', function() {
    console.log('Upload Completed');
})
.upload();


