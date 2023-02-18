import { faker } from '@faker-js/faker'
import generate from './helpers.js'
import { BASE_SALARY, staffStatus, userRole } from './constants.js'
import configData from './data.js'

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
      if (['3', '4'].includes(school?.id)) {
        Array.from([6, 7, 8, 9, 10, 11]).forEach(grade => {
          Array.from(new Array(faker.datatype.number({ min: 1, max: 3 })))
            .forEach((_, classNo) => {
              const _class = {
                schoolId: school?.id,
                id: school?.id + '-' + grade + 'A' + (classNo + 1),
                name: grade + 'A' + (classNo + 1),
                classSize: faker.datatype.number({ min: 15, max: 25 }),
                status: school?.status,
                createdAt: Date.now(),
                updatedAt: Date.now()
              }
              list.push(_class)
            })
        })
      }
      else {
        Array.from([
          'Bộ binh sơ cấp',
          'Nâng cao Đà Nẵng',
          'Nâng cao Bình Định',
          'Bootcamp Kid Extreme',
          'Bootcamp Teen Extreme',
          'Teen Leaders Nhật Bản',
          'Teen Leaders Mỹ',
          'Siêu Trí tuệ Teen-Kid'
        ]).forEach(course => {
          Array.from(new Array(faker.datatype.number({ min: 0, max: 2 })))
            .forEach((_, classNo) => {
              const _class = {
                schoolId: school?.id,
                id: school?.id + '-' + course + '-' + (classNo + 1),
                name: course + '-' + (classNo + 1),
                classSize: faker.datatype.number({ min: 15, max: 25 }),
                status: school?.status,
                createdAt: Date.now(),
                updatedAt: Date.now()
              }
              list.push(_class)
            })
        })
      }
    }

    return list
  },
  STAFFS: (listSchools) => {  // này nếu design DB thì nên tách 2 bảng: Staff & Salary
    const list = []

    // Random data for SALARY_LEVELS.SALARY
    configData.SALARY_LEVELS.SALARY =
      configData.SALARY_LEVELS.SALARY.map(salary => {
        const level = faker.datatype.number({ min: 5, max: 15 })
        return ({
          ...salary,
          level,
          value: BASE_SALARY * faker.datatype.number({ min: 5, max: 15 })
        })
      })

    for (const school of listSchools) {
      Array.from(new Array(faker.datatype.number({ min: 8, max: 20 }))).forEach((_, idx) => {
        const name = faker.name.lastName() + ' ' + faker.name.firstName()
        const staffId = generate.SHORT_NAME(name) + (idx + 1)
        const basicSalary = configData.SALARY_LEVELS.SALARY[idx + 1]?.value //  + '000000'  // 5tr-15tr
        const insuranceSalary = generate.STAFF_INSURANCE_SALARY(basicSalary)

        const _class = {
          schoolId: school?.id,
          id: faker.datatype.uuid()?.slice(0, 4),
          staffId,
          name,
          email: generate.EMAIL(name),
          phone: faker.phone.number('0#########'),
          taxCode: faker.phone.number('8############'),
          salaryLevel: configData.SALARY_LEVELS.SALARY[idx + 1]?.level,  // hệ số lương
          basicSalary,  // lương cơ bản (=/= lương cơ sở (BASE_SALARY))
          bonus: 200000,  // thưởng
          OT: 0,  // OT (làm thêm)
          insuranceSalary,  // lương đóng BH
          allowance: faker.datatype.number({ min: 1, max: 2 }) + faker.datatype.number(9) + '00000',  // Phụ cấp
          otherAllowance: generate.STAFF_OTHER_ALLOWANCE(),  // Phụ cấp khác
          taxTNCN: 0.1 * 0.85 * basicSalary,  // đang giả định ai cũng đóng thuế TNCN như nhau ở 10%
          bhxh: 0.08 * insuranceSalary,   // BHXH
          bhyt: 0.015 * insuranceSalary,  // BHYT
          bhtn: 0.01 * insuranceSalary,   // BH thất nghiệp
          familyReduction: 11000000,    // đang giả định ai cũng đc giảm trừ 11tr (tiêu chuẩn)
          workingDays: '22/22', // ngày công 100% lương
          leaveDays: '0/22',    // nghỉ phép (tạm coi là phép ko lương)
          netSalary: 0.85 * basicSalary,  // lương thực lãnh
          taxableIncome: basicSalary,  // thu nhập chịu thuế
          assessableIncome: basicSalary - 2000000,   // thu nhập tính thuế  = thu nhập chịu thuế - tiền lương/công/phụ cấp/trợ cấp/... - các khoản giảm trừ (BHXH,...)
          bhxhATY: 0.175 * insuranceSalary, // BHXH ATY phải đóng cho người lao động
          bhytATY: 0.03 * insuranceSalary,  // BHYT ATY phải đóng cho người lao động
          bhtnATY: 0.01 * insuranceSalary,   // BHTN ATY phải đóng cho người lao động
          unionFee: 0.01 * 0.85 * basicSalary,   // công đoàn phí: 1% lương thực lãnh (cty đóng, người lao động ko đóng)
          jobPosition: configData.SALARY_LEVELS.SALARY[idx + 1]?.name,
          bank: generate.STAFF_BANK(name),
          status: generate.STAFF_STATUS(),
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