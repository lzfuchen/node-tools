module.exports = {
  apps: [
    {
      name: 'node-tools',
      script: './app.js',
      exec_mode: 'cluster',
      instances: 2
    }
  ]
}
