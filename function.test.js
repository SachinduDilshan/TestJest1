const functions = require('./functions');

test('adds 1+2 to eqaul to 3', () => {
    expect(functions.add(1, 2)).toBe(3);        
});

test ('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test ('Should be falsy', () => {   
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test ('User should be Anura Senevirathne', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Anura',
        lastName: 'Senevirathne',
        age: 30
    });
});

test ('Should be under 1600', () =>{
    const load1 = 800;
    const load2 = 799.99944;
    expect(load1 + load2).toBeLessThan(1600);
});

test ('There is no I in team', () => {
    expect('teamI').toMatch(/I/);
});

test('Admin should be in usernames', () => {
    const usernames = ['Kalasi', 'Anura'];
    expect(usernames).not.toContain('Admin');
});

//Promise test
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })
});

//Async Await test
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});