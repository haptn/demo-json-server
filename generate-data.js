// const { faker } = require('@faker-js/faker')
// const fs = require('fs')
import { faker } from '@faker-js/faker'
import fs from 'fs'

// Set locale to use Vietnamese
faker.locale = 'vi'

// console.log(faker.address.streetAddress());
// console.log(faker.company.name());
// console.log(faker.image.unsplash.imageUrl());
// console.log(faker.animal.dog());
// console.log(faker.random.words());


const randomSchoolsList = numOfSchools => {
  if (numOfSchools <= 0) return []

  const list = []

  // loop and push schools
  Array.from(new Array(numOfSchools)).forEach(() => {
    const school = {
      id: faker.datatype.uuid()?.slice(0, 4),
      name: 'ATY ' + faker.company.name(),
      address: faker.address.streetAddress() + ', ' + faker.address.stateAbbr(),
      createdAt: Date.now(),
      updatedAt: Date.now()
    }

    list.push(school)
  })

  return list
}

const randomAccountList = (schoolsList, numOfAccounts) => {
  if (numOfAccounts <= 0) return []

  const list = []

  for (const school of schoolsList) {
    Array.from(new Array(numOfAccounts)).forEach(() => {
      const account = {
        schoolId: school?.id,
        id: faker.datatype.uuid(),
        name: faker.name.lastName() + ' ' + faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.datatype.uuid().slice(0, 6),
        avatar: faker.image.avatar(),
        address: faker.address.streetAddress() + ', ' + faker.address.stateAbbr(),
        status: faker.datatype.boolean(),
        createdAt: Date.now(),
        updatedAt: Date.now()
      }

      list.push(account)
    })
  }

  return list
}

// IIFE (đọc là "íp-phi")
(() => {
  // Random data
  const schoolsList = randomSchoolsList(6)
  const accountsList = randomAccountList(schoolsList, 3)

  // Prepare DB object
  const db = {
    schools: schoolsList,
    accounts: accountsList,
    profile: { name: 'Po' }
  }

  // Write DB object to db.json file
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully');
  })
})()