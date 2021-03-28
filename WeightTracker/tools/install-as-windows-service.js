var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'node-app',
  description: 'node-app',
  script: 'C:\\SourceCode\\node-weight-tracker'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();