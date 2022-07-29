const Intern = require('../lib/Intern');

test('Create Intern object', () => {
    const intern = new Intern('John',1, 'John@email.com', 'Rice University');

    expect(intern.name).toBe('John');
    expect(intern.id).toEqual(1);
    expect(intern.email).toBe('John@email.com');
    expect(intern.school).toBe('Rice University');
});

test('getName returns Intern name', () => {
    const intern = new Intern('John',1, 'John@email.com', 'Rice University');

    expect(intern.getName()).toBe(intern.name);
    expect(intern.getId()).toBe(intern.id);
    expect(intern.getEmail()).toBe(intern.email);
})

test("getSchool returns Intern's school", () => {
    const intern = new Intern('John',1, 'John@email.com', 'Rice University');
    
    expect(intern.getSchool()).toBe(intern.school)
    
})

test('getRole returns Intern role', () => {
    const intern = new Intern('John',1, 'John@email.com', 'Rice University');
    
    expect(intern.getRole()).toBe('Intern');
})