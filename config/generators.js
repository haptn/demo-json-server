import { faker } from '@faker-js/faker'
import generate from './helpers.js'
import { staffStatus, userRole } from './constants.js'

// Set locale to use Vietnamese
faker.locale = 'vi'

// ==================== Random Data Generators ====================
const randomList = {
  ACCOUNTS: (listSchools, numOfAccounts) => {
    if (numOfAccounts <= 0) return []

    const list = []

    const adminATY = {
      schoolId: null,
      id: faker.datatype.uuid(),
      name: 'Nguyễn Văn An',
      email: generate.EMAIL('Nguyễn Văn An'),
      phone: faker.phone.number('0#########'),
      role: userRole.ADMIN,
      password: '123456',
      avatar: faker.image.avatar(),
      address: faker.address.streetAddress(),
      status: staffStatus.WORKING,
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
    list.push(adminATY)

    for (const school of listSchools) {
      Array.from(new Array(numOfAccounts)).forEach((_item, idx) => {
        const name = faker.name.lastName() + ' ' + faker.name.firstName()

        const account = {
          schoolId: school?.id,
          id: faker.datatype.uuid(),
          name,
          email: generate.EMAIL(name),
          phone: faker.phone.number('0#########'),
          role: idx === 0 ? userRole.SCHOOL_ADMIN : userRole.ACCOUNTER,
          password: faker.datatype.uuid().slice(0, 6),
          avatar: faker.image.avatar(),
          address: faker.address.streetAddress(),
          status: generate.STAFF_STATUS(),
          createdAt: Date.now(),
          updatedAt: Date.now()
        }

        list.push(account)
      })
    }

    return list
  },
  CLASSES: (listSchools) => {
    const list = []

    for (const school of listSchools) {
      Array.from([6, 7, 8, 9, 10, 11]).forEach(grade => {
        Array.from(new Array(faker.datatype.number({ min: 1, max: 3 })))
          .forEach((_, classNo) => {
            const _class = {
              schoolId: school?.id,
              id: grade + 'A' + (classNo + 1),
              name: grade + 'A' + (classNo + 1),
              classSize: faker.datatype.number({ min: 15, max: 25 }),
              createdAt: Date.now(),
              updatedAt: Date.now()
            }
            list.push(_class)
          })
      })
    }

    return list
  },
  STAFFS: (listSchools) => {
    const list = []

    for (const school of listSchools) {
      Array.from(new Array(faker.datatype.number({ min: 2, max: 10 }))).forEach((_, idx) => {
        const name = faker.name.lastName() + ' ' + faker.name.firstName()
        const staffId = generate.SHORT_NAME(name) + (idx + 1)
        const basicSalary = faker.datatype.number({ min: 5, max: 20 }) + '000000'  // 5tr-20tr

        const _class = {
          schoolId: school?.id,
          id: faker.datatype.uuid()?.slice(0, 4),
          staffId,
          name,
          email: generate.EMAIL(name),
          taxCode: faker.phone.number('8############'),
          basicSalary,
          insuranceSalary: generate.STAFF_INSURANCE_SALARY(basicSalary),
          allowance: faker.datatype.number({ min: 1, max: 2 }) + faker.datatype.number(9) + '00000',
          otherAllowance: generate.STAFF_OTHER_ALLOWANCE(),
          jobType: faker.name.jobType(),
          bank: generate.STAFF_BANK(name),
          createdAt: Date.now(),
          updatedAt: Date.now()
        }

        list.push(_class)
      })
    }

    return list
  },
  STUDENTS: (listClasses) => {
    const list = []

    for (const _class of listClasses) {
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
  },
}

// export const randomListSchools = numOfSchools => {
//   if (numOfSchools <= 0) return []

//   const list = []

//   // loop and push schools
//   Array.from(new Array(numOfSchools)).forEach(() => {
//     const school = {
//       id: faker.datatype.uuid()?.slice(0, 4),
//       name: 'ATY ' + faker.company.name(),
//       address: faker.address.streetAddress(),
//       createdAt: Date.now(),
//       updatedAt: Date.now()
//     }

//     list.push(school)
//   })

//   return list
// }

export default randomList