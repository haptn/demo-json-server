import fs from 'fs'

import randomList from './config/generators.js'
import list from './config/data.js'

const getSidebarMenu = () => {

}

// ===============================================================
// IIFE (đọc là "íp-phi")
(() => {
  // Data
  // const listSchools = randomListSchools(6)
  const listClasses = randomList.CLASSES(list.SCHOOLS)
  // const listStudentsOfClasses = randomList.STUDENTS_OF_CLASSES(listClasses)
  // const listStudentsOfCourses = randomList.STUDENTS_OF_COURSES(listClasses)
  // const staffsList = randomList.STAFFS(list.SCHOOLS)
  // const accountsList = randomList.ACCOUNTS(list.SCHOOLS, 3)

  // Prepare DB object
  const db = {
    classes: listClasses,
    schools: list.SCHOOLS,
    courses: list.COURSES,
    settings: list.SETTINGS,
    'bank-accounts': list.BANK_ACCOUNTS,
    'payment-methods': list.PAYMENT_METHODS,
    'tuition-fees': list.TUITION_FEES,
    taxes: list.TAXES.LIST,
    'tax-types': list.TAXES.TYPE,
    currencies: list.CURRENCIES,
    salary: list.SALARY_LEVELS.SALARY,
    bonus: list.SALARY_LEVELS.BONUS,
    allowance: list.SALARY_LEVELS.ALLOWANCE,
    staffs: randomList.STAFFS(list.SCHOOLS),
    students: randomList.STUDENTS(listClasses),
    // students: [...listStudentsOfClasses, ...listStudentsOfCourses],
    // 'students-of-classes': listStudentsOfClasses,
    // 'students-of-courses': listStudentsOfCourses,
    accounts: randomList.ACCOUNTS(list.SCHOOLS, 3),

    profile: { name: 'Phạm Thị Ngọc Hà' }
  }

  // Write DB object to db.json file
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully');
  })
})()