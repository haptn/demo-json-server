// const { faker } = require('@faker-js/faker')
// const fs = require('fs')
import { faker } from '@faker-js/faker'
import fs from 'fs'
import {
  _generateEmail,
  _generateSchoolStatus,
  _generateStaffStatus,
  _generateRole
} from './config/helpers.js'

// Set locale to use Vietnamese
faker.locale = 'vi'

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

const randomClassesList = schoolsList => {    // , numOfClasses
  // if (numOfClasses <= 0) return []

  const list = []

  // loop and push classes in each school
  for (const school of schoolsList) {
    Array.from(new Array(faker.datatype.number({ min: 1, max: 5 }))).forEach(() => {
      const _class = {
        schoolId: school?.id,
        id: faker.datatype.uuid()?.slice(0, 4),
        name: faker.random.numeric(1, { bannedDigits: ['0', '1', '2', '3', '4', '5'] }) + 'A' + faker.random.numeric(1, { bannedDigits: ['0'] }),
        classSize: faker.datatype.number({ min: 15, max: 25 }),
        createdAt: Date.now(),
        updatedAt: Date.now()
      }

      list.push(_class)
    })
  }

  return list
}

const randomStudentsList = classesList => {
  const list = []

  for (const _class of classesList) {
    Array.from(new Array(faker.datatype.number({ min: 15, max: 25 }))).forEach(() => {
      const student = {
        classId: _class?.id,
        id: faker.datatype.uuid()?.slice(0, 4),
        name: faker.name.lastName() + ' ' + faker.name.firstName(),
        parentName: faker.name.lastName() + ' ' + faker.name.firstName(),   // ko biết có cần ko nữa
        createdAt: Date.now(),
        updatedAt: Date.now()
      }

      list.push(student)
    })
  }

  return list
}

const randomStaffsList = schoolsList => {
  const list = []

  for (const school of schoolsList) {
    Array.from(new Array(faker.datatype.number({ min: 2, max: 10 }))).forEach(() => {
      const _class = {
        schoolId: school?.id,
        id: faker.datatype.uuid()?.slice(0, 4),
        name: faker.name.lastName() + ' ' + faker.name.firstName(),
        jobType: faker.name.jobType(),
        createdAt: Date.now(),
        updatedAt: Date.now()
      }

      list.push(_class)
    })
  }

  return list
}

const coursesList = [
  {
    id: '1',
    name: 'Học kỳ quân đội Bộ binh sơ cấp',
    price: '8.000.000đ',
    description: '7-17 tuổi',
    status: 'Sẵn sàng',   // 3 statuses: Sẵn sàng, Tạm đóng, Sắp ra mắt
    schoolId: null,       // áp dụng cho...: null --> all schools | [...schoolIds]
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: '2',
    name: 'Học kỳ quân đội Nâng cao',
    price: '11.000.000đ',
    description: '12-18 tuổi',
    status: 'Sẵn sàng',
    schoolId: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: '3',
    name: 'Hi! Teacher',
    price: '6.000.000đ',
    description: '7-12 tuổi',
    status: 'Sẵn sàng',
    schoolId: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: '4',
    name: 'International Bootcamp Bình Định',
    price: '5.000.000đ',
    description: '7-17 tuổi',
    status: 'Sẵn sàng',
    schoolId: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: '5',
    name: 'Bootcamp Kid Extreme',
    price: '12.000.000đ',
    description: '7-12 tuổi',
    status: 'Sẵn sàng',
    schoolId: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: '6',
    name: 'Bootcamp Teen Extreme',
    price: '15.000.000đ',
    description: '12-18 tuổi',
    status: 'Sẵn sàng',
    schoolId: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: '7',
    name: 'Phát triển kỹ năng lãnh đạo',
    price: '10.000.000đ',
    description: '12-20 tuổi',
    status: 'Sẵn sàng',
    schoolId: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: '8',
    name: 'Teen Leaders',
    price: '20.000.000đ',
    description: '12-20 tuổi',
    status: 'Sẵn sàng',
    schoolId: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: '9',
    name: 'Pre-Teen Leaders',
    price: '0đ',
    description: '12-20 tuổi',
    status: 'Sẵn sàng',
    schoolId: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: '10',
    name: 'Siêu Trí tuệ Teen-Kid',
    price: '6.000.000đ',
    description: '7-15 tuổi',
    status: 'Sẵn sàng',
    schoolId: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: '11',
    name: 'Sống mạnh mẽ',
    price: '4.000.000đ',
    description: '6-12 tuổi',
    status: 'Sẵn sàng',
    schoolId: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: '12',
    name: 'Học làm người nông dân',
    price: '5.000.000đ',
    description: '7-12 tuổi',
    status: 'Sẵn sàng',
    schoolId: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: '13',
    name: 'Thám du',
    price: '4.000.000đ',
    description: '10-15 tuổi',
    status: 'Sẵn sàng',
    schoolId: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: '14',
    name: 'Tư duy tích cực',
    price: '4.000.000đ',
    description: '12 tuổi trở lên',
    status: 'Sẵn sàng',
    schoolId: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: '15',
    name: 'Dân vũ',
    price: '2.000.000đ',
    description: 'Không giới hạn độ tuổi',
    status: 'Sẵn sàng',
    schoolId: null,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
]



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

const getSidebarMenu = () => {

}

const getSettings = () => {

}

// ===============================================================
// IIFE (đọc là "íp-phi")
(() => {
  // Data
  const schoolsList = randomSchoolsList(6)
  const classesList = randomClassesList(schoolsList)
  const studentsList = randomStudentsList(classesList)
  const staffsList = randomStaffsList(schoolsList)
  const accountsList = randomAccountList(schoolsList, 3)

  // Prepare DB object
  const db = {
    schools: schoolsList,
    classes: classesList,
    students: studentsList,
    staffs: staffsList,
    courses: coursesList,
    accounts: accountsList,
    profile: { name: 'Phạm Thị Ngọc Hà' }
  }

  // Write DB object to db.json file
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully');
  })
})()