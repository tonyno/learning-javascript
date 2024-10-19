// create function loginUser with two parameters: email and password
// inside function create these constants:
// - user1email: tonda.kmoch@gmail.com
// - user1password: auto
// - user2email: lenatko@gmail.com
// - user2password: bubak
// the function will return true, if email and password matches one of those users

// (create function here)
function loginUser(email, password) {
    const user1email = 'tonda.kmoch@gmail.com'
    const user1password = 'auto'
    const user2email = 'lenatko@gmail.com'
    const user2password = 'bubak'
    const correctUser = (email == user1email && password == user1password) || (email == user2email && password == user2password)
    return correctUser
}

// create function test with two parameters: email and password
// this function will print on screen if the email and password passes in loginUser function

// (create function here)
function test(email, password) {
    console.log('Kontroluju uzivatele a jeho email', email, 'a jeho heslo', password)
    if (loginUser(email, password)) {
        console.log('a jeho prihlasovaci udaje jsou:spravne')
    }
    else {
        console.log('a jeho prihlasovaci udaje jsou:spatne')
    }

}
test('lenatko@gmail.com', 'bubak')
test('lenatko@gmail.com', 'auto')
test('tonda.kmoch@gmail.com', 'bubak')
test('tonik.kmoch@gmail.com', 'idsj')

// write code that tests 4 different users with these combinations:
// 1. good email and password
// 2. good email but bad password
// 3. bad email but good password
// 4. different email and different password

// (place the code here)