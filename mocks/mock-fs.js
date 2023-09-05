// mock-fs.js
const fs = {};

fs.readFileSync = (filename, encoding) => {
  // Handle reading a file here if necessary
  // For simplicity, this example returns an empty string
  return '';
};

fs.writeFileSync = (filename, data, encoding) => {
  // Handle writing to a file here if necessary
  // For simplicity, this example does nothing
};

module.exports = fs;
