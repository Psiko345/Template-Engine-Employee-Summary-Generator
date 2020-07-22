// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

import Employee from "./Employee";

export default class Engineer extends Employee {
  constructor(github) {
    if (!github) {
      throw new Error("Missing GitHub Username.");
    }
  }
}
