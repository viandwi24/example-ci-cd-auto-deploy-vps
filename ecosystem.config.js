module.exports = {
  apps: [
    {
      name: 'ExampleCiCdAutoDeployVPS',
      exec_mode: 'cluster',
      instances: 1,
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env_production: {
        "PORT": 4000,
        "HOST": "0.0.0.0",
        "NODE_ENV": "production"
      }
    }
  ]
}
