// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// Declare required package
const license = require('../index.js');

// Declare array of objects containing license names, badges, and links
const licenseArr = [
  {
    lic: 'Apache License 2.0',
    badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  },
  {
    lic: 'Boost Software License 1.0',
    badge: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  },
  {
    lic: 'GNU General Public License v3.0',
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  },
  {
    lic: 'MIT License',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  },
  {
    lic: 'BSD 2-Clause "Simplified" License',
    badge: '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  },
  {
    lic: 'BSD 3-Clause "New" or "Revised" License',
    badge: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  },
  {
    lic: 'Creative Commons Zero v1.0 Universal',
    badge: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
  },
  {
    lic: 'Eclipse Public License 2.0',
    badge: '[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)'
  },
  {
    lic: 'GNU Affero General Public License v3.0',
    badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  },
  {
    lic: 'GNU General Public License v2.0',
    badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  },
  {
    lic: 'GNU Lesser General Public License v3',
    badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  },
  {
    lic: 'Mozilla Public License 2.0',
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  },
  {
    lic: 'The Unlicense',
    badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  },
];

// Returns a license badge w/ link based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if (!license) {
    return '';
  } else {
    const licenseBadge = licenseArr.filter(l => l.lic === license);
    return `
${licenseBadge[0].badge}
    `;
  }
}

// Returns the license section of README if a license is provided
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `
## License
  
This application is licensed under ${license}.
    `;
  }
}

// Generate markdown for README
function generateMarkdown(response) {
  return `
# ${response.title}

${renderLicenseBadge(response.license)}

## Description

${response.description}
      
## Table of Contents
1. [Install Instructions](#install-instructions)
2. [Usage Instructions](#usage-instructions)
3. [License](#license)
4. [Contribution Guidelines](#contribution-guidelines)
5. [Test Instructions](#test-instructions)
6. [Questions](#questions)

## Install Instructions

${response.installInstructions}
  
## Usage Instructions

${response.usage}

${renderLicenseSection(response.license)} ${renderLicenseBadge(response.license)}

## Contribution Guidelines

${response.contributionGuidelines}

## Test Instructions

${response.testInstructions}

## Questions

If you have any questions, contact the author:  

GitHub [@${response.gitHubUser}](https://github.com/${response.gitHubUser})  
Email [${response.email}](mailto:${response.email})
`;
}

// export the generateMarkdown function for use elsewhere (index.js)
module.exports = generateMarkdown;
