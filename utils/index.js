const readMe = data =>{
    return(`# ${data.name}
    
### DESCRIPTION

${data.description}

### TABLE OF CONTENTS

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Info](#info)
    
### INSTALLATION

${data.install}
    
### USAGE

${data.usage}
    
### CONTRIBUTING

${data.contributors}

    
### INFO
GitHub: https://www.github.com/${data.user}
    
Email Address: ${data.email}
    `)
}
module.exports=readMe