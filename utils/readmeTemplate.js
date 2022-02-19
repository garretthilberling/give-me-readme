const generatePage = (firstname,lastname,projectname,github,linkedin,url,license,tests,faq) => {
  return `
    # ${projectname}

    ## Table of Contents
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Tests](#Tests)
    * [FAQ](#FAQ)
    * [Credits] (#Credits)
 
    ## Description
    

    ## Installation
    No installation required, access the application at the live URL via this link: ${url}

    ## Usage
    The functionality is simple: the user inputs their desired city and the forecast for the next six days is printed to the page. The city that was searched is then stored into a button that the user can use to toggle back to that search more easily. 

    ## License
    ${license}

    ## Tests
    ${tests}

    ## FAQ
    ${faq}

    ## Credits
    This project was created solely by ${firstname} ${lastname}: https://github.com/${github} / ${linkedin}
    `;
};

module.exports = generatePage;
