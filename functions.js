const { default: axios } = require("axios");

const functions = {
    add: function(a, b, ) {
        return a + b;
    },
    isNull: () => {
        return null;
    },
    checkValue: (x) => {
        return x;
    },
    createUser: () => {
        const user = {
        firstName: 'Anura'};
        user['lastName'] = 'Senevirathne';
        user['age'] = 30;  
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)    
    .catch(err => 'error')      
};

module.exports = functions;
// This module exports an object with a single method 'add' that takes two arguments and returns their sum.