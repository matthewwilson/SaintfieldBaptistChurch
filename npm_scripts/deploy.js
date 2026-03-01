const path = require('node:path');
const Client = require('ssh2-sftp-client');

const client = new Client();

const config = {
  host: process.env.FTP_HOST,
  username: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  port: 1050,
};

const localBuildDir = path.join(__dirname, '..', 'build');
const remoteDir = 'public_html';

async function deploy() {
  try {
    await client.connect(config);
    await client.uploadDir(localBuildDir, remoteDir);
    console.log('Upload Completed');
  } catch (err) {
    console.error('Upload failed:', err);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
}

deploy();
