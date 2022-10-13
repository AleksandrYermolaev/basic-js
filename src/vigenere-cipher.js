const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (value = true) {
	if (value === true) {
		this.value = true;
	} else {
		this.value = false;
	}
  }
  vocabulary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  encrypt(message, key) {
	if (!message) throw new Error('Incorrect arguments!');
	if (!key) throw new Error('Incorrect arguments!');
	let keyword = (message.length >= key.length ? 
				  key.padEnd(message.length, key) : 
				  key.slice(0, message.length - key.length));
	for (let i = 0; i < message.length; i++) {
		if (message[i] === ' ') {
			keyword = keyword.substring(0, i) + ' ' + keyword.substring(i);
		}
	}
	
	const result = [];
	for (let i = 0; i < message.length; i++) {
		const messageLetterNum = this.vocabulary.indexOf(message[i].toUpperCase());
		const keyLetterNum = this.vocabulary.indexOf(keyword[i].toUpperCase());
		if (messageLetterNum === -1) {
			result.push(message[i]);
		} else {
			const cipherLetter = this.vocabulary[(messageLetterNum + keyLetterNum) % 26];
			result.push(cipherLetter);
		}
	}
	
	if (this.value === true) {
		console.log(result.join(''))
		return result.join('');
	} else {
		console.log(result.reverse().join(''))
		return result.reverse().join('');
	}
	
  }
  decrypt(message, key) {
    if (!message) throw new Error('Incorrect arguments!');
	if (!key) throw new Error('Incorrect arguments!');
	let keyword = (message.length >= key.length ? 
				  key.padEnd(message.length, key) : 
				  key.slice(0, message.length - key.length));
	for (let i = 0; i < message.length; i++) {
		if (message[i] === ' ') {
			keyword = keyword.substring(0, i) + ' ' + keyword.substring(i);
		}
	}
	const result = [];
	for (let i = 0; i < message.length; i++) {
		const messageLetterNum = this.vocabulary.indexOf(message[i].toUpperCase());
		const keyLetterNum = this.vocabulary.indexOf(keyword[i].toUpperCase());
		if (messageLetterNum === -1) {
			result.push(message[i]);
		} else {
			const cipherLetter = this.vocabulary.at((messageLetterNum - keyLetterNum) % 26);
			result.push(cipherLetter);
		}
	}
	if (this.value === true) {
		console.log(result.join(''))
		return result.join('');
	} else {
		console.log(result.reverse().join(''))
		return result.reverse().join('');
	}
  }
}

// const a = new VigenereCipheringMachine(false);
// a.encrypt('Same length key', 'Samelengthkey')
// a.decrypt('KAYIWIAMMOUIW', 'Samelengthkey')


module.exports = {
  VigenereCipheringMachine
};
