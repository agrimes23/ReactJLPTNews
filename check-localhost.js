const fs = require('fs');

const filePath = 'src/services/api.ts'; // Update with the actual file path
const fileContent = fs.readFileSync(filePath, 'utf8');

// Check for uncommented localhost references
if (!fileContent.includes('//   baseURL: "http://localhost')) {
  console.error('PLEASE FIX: Uncommented localhost reference found.');
  process.exit(1); // Return a non-zero exit code to indicate a failed test
} else {
  console.log('Okay to push: No uncommented localhost references found.');
  process.exit(0); // Return zero to indicate a successful test
}