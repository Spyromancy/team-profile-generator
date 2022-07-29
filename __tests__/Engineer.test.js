const Engineer = require('../lib/Engineer');

test('Create Engineer object', () => {
    const eng = new Engineer('John',1, 'John@email.com', 'Spyromancy');

    expect(eng.name).toBe('John');
    expect(eng.id).toEqual(1);
    expect(eng.email).toBe('John@email.com');
    expect(eng.github).toBe('Spyromancy');
});

test('Properly inherits parent methods', () => {
    const eng = new Engineer('John',1, 'John@email.com', 'Spyromancy');

    expect(eng.getName()).toBe(eng.name);
    expect(eng.getId()).toEqual(eng.id);
    expect(eng.getEmail()).toBe(eng.email);
})

test('getGithub returns Engineer github username', () => {
    const eng = new Engineer('John',1, 'John@email.com', 'Spyromancy');
    
    expect(eng.getGithub()).toBe(eng.github);
})

test('getRole returns Engineer role', () => {
    const eng = new Engineer('John',1, 'John@email.com', 'Spyromancy');
    
    expect(eng.getRole()).toBe('Engineer');
})