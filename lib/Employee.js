// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    if (!name) {
      throw new Error("Missing Employee Name.");
    }
    if (!id) {
      throw new Error("Missing Employee Id.");
    }
    if (!email) {
      throw new Error("Missing Employee Email.");
    }
    // name
    this.name = name;
    // id
    this.id = id;
    // email
    this.email = email;
  }
}
// getName()

// getId()

// getEmail()

// getRole()  -- Returns 'Employee'

//const employee = new Employee();
