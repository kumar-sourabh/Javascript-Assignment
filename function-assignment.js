//FIRST ASSIGNMENT

function greet() {
    return 'Hello';
}

function name(user, func)
{

    const message = func();

    console.log(`${message} ${user}`);
}

name('John', greet);
name('Jack', greet);
name('Sara', greet);

//SECOND ASSIGNMENT

const getInitials = (firstName,lastName) => { return firstName.charAt(0) + lastName.charAt(0); }
console.log(getInitials("Sourabh", "Kumar"));
console.log(getInitials("Roger", "Waters"));