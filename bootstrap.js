const path = require('path');
const applications = ['storefront', 'account', 'browsing', 'checkout', 'search'];

applications.forEach(applicationName => {
  require(path.join(__dirname, './applications', applicationName));
});
