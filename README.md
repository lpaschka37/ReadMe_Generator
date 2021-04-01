# ReadMe_Generator

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

## Description

The purpose of this application is to simplify the readme file creation process by automatically generating a readme file based on responses provided on common readme sections, includes: Title, Description, Installation Instructions, Usage Instructions, License, Contribution Guidelines, Test Instructions, Questions and contact information about the author, followed by a message confirming the README file is ready for use.
      
## Table of Contents
1. [Install Instructions](#install-instructions)
2. [Usage Instructions](#usage-instructions)
3. [License](#license)
4. [Contribution Guidelines](#contribution-guidelines)
5. [Test Instructions](#test-instructions)
6. [Questions](#questions)
7. [Deliverable](#deliverable)
6. [Repository](#Repository)

## Install Instructions

You will need [Node.js](https://nodejs.org/en/) to run this application, ensure Node.js is installed first.  

Lets get started, ensure the following files and folders are present in the root directory: 
  

<img src="./assets/directory_files.png width="300" alt="directory list">

  
* ```index.js``` (to initialize the application and write the README file)
* ```package.json``` (contains dependencies)
* ```/utils``` folder containing ```generateMarkdown.js``` (to generate markdown)

Next, open the integrated terminal and run the following command to install [Inquirer](https://www.npmjs.com/package/inquirer):

    npm install  

Once installed, confirm the folder ```/node_modules/inquirer``` is present before proceeding to Usage Instructions.
 
## Usage Instructions

Open the integrated terminal command prompt and type the following command, then press enter: 

    node index.js

Follow the prompts and respond to populate your readme with content.  

After the final response, the README(.md) file will be automatically generated in the root directory.  

If using VScode, right-click on the README file and select 'Open Preview' to see your presentable README.

## License
  
This application is licensed under Mozilla Public License 2.0.

  [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

## Contribution Guidelines

Contributors are welcome. Just remember, this is open source software. Consider the people who will read your code, make sure it is formatted properly so this is easy to read for all potential users. 

## Test Instructions

Tests are coming soon..

## Questions

If you have any questions, please contact the author:  

GitHub [@lpaschka37](https://github.com/lpaschka37)  
Email [lpaschka37@gmailcom](mailto:lpaschka37@gmail.com)

## Deliverable
<img src="./assets/ReadMe_Generator_Gif.gif" width="600" alt="demo">

### Repository
https://github.com/lpaschka37/ReadMe_Generator
