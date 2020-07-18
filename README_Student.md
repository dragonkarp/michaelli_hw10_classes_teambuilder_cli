## Unit 10 OOP Homework: Template Engine - Employee Summary

## Student Name
Michael Li

## Assignment Description
We were to implement the Employee, Manager, Engineer, and Intern classes in lib/ and required to use the TDD with the given test/ files. The app.js file implementation is required to allow the user to, in the CLI, input team members to a mock team of a company. Team member data included name, id, email, and a unique property based on the employee's role. When the user is done, the array containing the objects of employee data is passed to a given render() function. The render() function creates a team.html file in the output/ folder. 

## Development Process
I was able to successfully pass all tests while implementing the class files. 

Since each employee had a unique property based on their role, I created the propmtRole() function to give the user a choice as to which type of employee they would like to add. Based on their input, logic in the buildTeam() function will execute either promptManagerData(), promptEngineerData(), or promptInternData() which includes the unique property.  

In the promptRole() function, there is an option to exit.

When the user chooses to stop building the team, the render() function is called the the global array, employees = [], is passed.  