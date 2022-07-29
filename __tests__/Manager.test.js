const Manager = require('../lib/Manager');

test('Create Manager object', () => {
    const mng = new Manager('John',1, 'John@email.com', 1);

    expect(mng.name).toBe('John');
    expect(mng.id).toEqual(1);
    expect(mng.email).toBe('John@email.com');
    expect(mng.officeNumber).toEqual(1)
});

test('getName returns Manager name', () => {
    const mng = new Manager('John',1, 'John@email.com', 1);

    expect(mng.getName()).toBe(mng.name);
    expect(mng.getId()).toBe(mng.id);
    expect(mng.getEmail()).toBe(mng.email);
})

test('getRole returns Manager role', () => {
    const mng = new Manager('John',1, 'John@email.com', 1);
    
    expect(mng.getRole()).toBe('Manager');
})