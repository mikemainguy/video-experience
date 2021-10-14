var CryptoJS = require("crypto-js");
const fs = require('fs')
const readline = require('readline');
const key_vault = 'key_vault';


try {
  var myArgs = process.argv.slice(2);
  const password = myArgs[1];
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

  if (myArgs[0] === "encrypt") {
    const plaintext = fs.readFileSync('.env', 'utf-8')
    var ciphertext = CryptoJS.AES.encrypt(plaintext, password).toString();
    fs.writeFileSync(key_vault, ciphertext)
    console.log(".env encrypted to key_vault, don't forget the password used because otherwise the data will be lost");
    process.exit(0);
  }
  if (myArgs[0] === "decrypt") {
    if (fs.existsSync('.env')) {
      (async () => {
        const overwrite = await prompt('Are you sure you want to overwrite .env? (Type "yes" to confirm) : ');
        if (overwrite === 'yes') {
          decrypt(password);
        } else {
          console.log('Vault not decrypted')
        }
        rl.close()
      })()
    }
  }
} catch (err) {
  console.error(err)
}

function decrypt(password) {
  const ciphertext = fs.readFileSync(key_vault, 'utf-8')
  var base64  = CryptoJS.AES.decrypt(ciphertext, password);
  var originalText = base64.toString(CryptoJS.enc.Utf8);
  fs.writeFileSync('.env', originalText, 'utf-8');
  console.log(key_vault + ' decrypted to .env');
}