// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Emplpyee.js')

class Engineer extends Employee {
    constructor() {
        this.githubUserName = githubUserName
        super(name, id, email)
    }

    getGithub() {
        return `https://github.com/${this.githubUserName}`
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer