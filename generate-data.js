// const { faker } = require('@faker-js/faker')
// const fs = require('fs')
import { faker } from '@faker-js/faker'
import fs from 'fs'

// Set locale to use Vietnamese
faker.locale = 'vi'

const _convertVNToEn = (strVN = '') => {
  let str = strVN
  str = str.toLowerCase()
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ|Đ|ð/g, 'd')
  return str
}

const _generateEmail = (name = '') => {
  const arr = name?.split(' ')
  const lastName = _convertVNToEn(arr[arr?.length - 1]?.toLowerCase())
  let shortName = lastName

  shortName += arr?.map(item => _convertVNToEn(item?.toLowerCase())
    ?.slice(0, 1))?.join('')
  shortName = shortName?.substring(0, shortName?.length - 1)

  return shortName + '@aty.edu.vn'
}

const _generateSchoolStatus = () => {
  const status = Math.round(Math.random() * 2)
  return status === 1 ? 'Đang hoạt động'
    : status === 2 ? 'Sắp hoạt động' : 'Tạm đóng'
}

const _generateStaffStatus = () => {
  const status = Math.round(Math.random())
  return status === 1 ? 'Đang làm' : 'Đã nghỉ'
}

const _generateRole = () => {
  const roleId = Math.round(Math.random() * 10)

  return roleId === 1 ? 'Admin trường'
    : roleId === 2 ? 'Admin ATY' : 'Kế toán'
}

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
      const name = faker.name.lastName() + ' ' + faker.name.firstName()

      const account = {
        schoolId: school?.id,
        id: faker.datatype.uuid(),
        name,
        email: _generateEmail(name),
        phone: faker.phone.number('0#########'),
        role: _generateRole(),
        password: faker.datatype.uuid().slice(0, 6),
        avatar: faker.image.avatar(),
        address: faker.address.streetAddress() + ', ' + faker.address.stateAbbr(),
        status: _generateStaffStatus(),
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