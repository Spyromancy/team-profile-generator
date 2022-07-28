const Employee = require('../lib/Employee');

test('Create employee object', () => {
    const emp = new Employee('John',1, 'John@email.com');

    expect(emp.name).toBe('John');
    expect(emp.id).toEqual(1);
    expect(emp.email).toBe('John@email.com');
    expect(emp.role).toBe('Employee');
});

test('getName returns Employee name'), () => {
    const emp = new Employee('John',1, 'John@email.com');

    expect(emp.getName()).toBe(emp.name);

}

test('getId returns Employee id'), () => {
    const emp = new Employee('John',1, 'John@email.com');
    
    expect(emp.getId()).toBe(emp.id.toString());
}

test('getEmail returns Employee email'), () => {
    const emp = new Employee('John',1, 'John@email.com');
    
    expect(emp.getEmail()).toBe(emp.email);
}

test('getRole returns Employee role'), () => {
    const emp = new Employee('John',1, 'John@email.com');
    
    expect(emp.getRole()).toBe(emp.role);
}