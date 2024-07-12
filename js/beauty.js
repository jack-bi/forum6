const fs = require('fs');
const path = require('path');

const directory = '../images/beauty/';

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  // Store old and new names
  let renameMap = [];
  
  // Store new names to avoid duplicates
  let newNames = new Set();

  // Prepare rename operations
  files.forEach((file, i) => {
    // Generate new name
    let newName = (i+1).toString() + '.jpg';

    // Check for duplicate new names
    if (newNames.has(newName)) {
      console.error('Duplicate new name', newName);
      process.exit(1);
    }
    newNames.add(newName);

    renameMap.push({old: path.join(directory, file), new: path.join(directory, newName)});
  });

  // Perform rename operations
  renameMap.forEach((renameOp) => {
    fs.rename(renameOp.old, renameOp.new, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
      }
    });
  });
});
