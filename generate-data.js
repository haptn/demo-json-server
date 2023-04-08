import fs from 'fs'

import randomList from './config/generators.js'
import list from './config/data.js'

// ===============================================================
// IIFE (đọc là "íp-phi")
(() => {
  // Data
  // const listSchools = randomListSchools(6)
  const listClasses = randomList.CLASSES(list.SCHOOLS)
  const listStudents = randomList.STUDENTS(listClasses)
  const listCurrentCourses = list.CURRENT_COURSES?.map(course => ({
    ...course,
    price: list.COURSES?.find(({ id }) => id === course?.courseId)?.price ?? 5000000,
    schoolId: !course?.schoolId
      ? listClasses?.find(({ id }) => id?.includes(course?.name))?.schoolId
      : course?.schoolId
  }))
  // const staffsList = randomList.STAFFS(list.SCHOOLS)
  // const accountsList = randomList.ACCOUNTS(list.SCHOOLS, 3)

  // Prepare DB object
  const db = {
    classes: listClasses,
    schools: list.SCHOOLS,
    courses: list.COURSES,
    'current-courses': listCurrentCourses,
    'current-acitivities': list.CURRENT_ACTIVITIES,
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
    students: listStudents,
    'completed-tuition-fees': randomList.TUITION_FEES(listStudents, listClasses),
    accounts: randomList.ACCOUNTS(list.SCHOOLS, 2),
    roles: list.ROLES,
    'budget-plan': list.BUDGET.PLAN,
    'budget-practical': list.BUDGET.PRACTICAL_BUDGET,
    'budget-practical-revenue': list.BUDGET.PRACTICAL_REVENUE,
    'budget-practical-cost': list.BUDGET.PRACTICAL_COST,

    profile: { name: 'Phạm Thị Ngọc Hà' }
  }

  // Write DB object to db.json file
  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Generate data successfully');
  })
})()