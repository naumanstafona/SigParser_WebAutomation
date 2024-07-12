// modifyCsv.ts

import fs from 'fs';
import csv from 'csv-parser';

export async function modifyCsv(): Promise<string[]> {
  const inputFile = '31-CustomFields_Contacts-UploadItems-Input/2 - TextField1.csv'; // Replace with your input CSV file
  const outputFile = '31-CustomFields_Contacts-UploadItems-Output/output.csv'; // Replace with your output CSV file

  const modifiedEmails = ['customcontact806@test.com', 'customcontact807@test.com', 'customcontact808@test.com'];

  const outputData: any[] = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(inputFile)
      .pipe(csv())
      .on('data', (row: any) => {
        // Modify data as needed here
        // Example: You might want to change the email addresses
        if (modifiedEmails.includes(row.email)) {
          row.email = `new_${row.email}`; // Modify email addresses
        }
        outputData.push(row);
      })
      .on('end', () => {
        fs.writeFileSync(outputFile, ''); // Clear output file
        outputData.forEach(row => {
          fs.appendFileSync(outputFile, `${row.email},${row.value}\n`);
        });
        resolve(modifiedEmails); // Return modified email addresses
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}