'use strict'
interface IPetStore {
	pets: Array<string>,
	createRandomPetPicker: Function
}
const petStore: IPetStore = {
	pets: ['dogs', 'cats'],
	createRandomPetPicker: function(this: IPetStore) {
		return () => {
			const pets = this.pets
			const i = Math.floor(Math.random() * pets.length)
			return pets[i]
		}
	}
}

const getRandomPet = petStore.createRandomPetPicker();
console.log(getRandomPet())
