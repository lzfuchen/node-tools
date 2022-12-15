module.exports = {
  apps: [
    {
      name: 'tools-server',
      script: 'app.js',
      exec_mode: 'cluster',
      instances: 2
    }
  ]
}
