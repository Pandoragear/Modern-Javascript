// logical operators - OR || and AND &&

const password = 'p@ss12';

if(password.length >= 12 && password.includes('@') && password.includes('s')){
    console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length >=5) {
    console.log('that password is strong enough');
} else {
    console.log('it is not strong enought');
}
