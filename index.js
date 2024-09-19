function generatePassword() {
    // Define possible characters for the password
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+{}:"<>?|[];,./`~';
    
    // Combine all possible characters into one string
    const allCharacters = lowercase + uppercase + numbers + specialCharacters;
    
    let password = '';
    const length = 12; // Customize password length

    // Generate password of the desired length
    for (let i = 0; i < length; i++) {
        // Pick a random character from the combined string
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    // Display the generated password in the HTML element
    document.getElementById("passwordDisplay").innerText = password;

    console.log('Generated Password:', password);
}
