import { faker } from "@faker-js/faker"
import { staffStatus } from "./constants.js"

// ============ Helpers (Functions) ============
export const _convertVNToEn = (strVN = '') => {
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

// ============ Generators (Functions) ============
const generate = {
  SHORT_NAME: (name = '') => {
    const arr = name?.split(' ')
    const lastName = _convertVNToEn(arr[arr?.length - 1]?.toLowerCase())
    let shortName = lastName

    shortName += arr?.map(item => _convertVNToEn(item?.toLowerCase())
      ?.slice(0, 1))?.join('')
    shortName = shortName?.substring(0, shortName?.length - 1)

    return shortName
  },
  EMAIL: (name = '') => {
    // const arr = name?.split(' ')
    // const lastName = _convertVNToEn(arr[arr?.length - 1]?.toLowerCase())
    // let shortName = lastName

    // shortName += arr?.map(item => _convertVNToEn(item?.toLowerCase())
    //   ?.slice(0, 1))?.join('')
    // shortName = shortName?.substring(0, shortName?.length - 1)

    // return shortName + '@aty.edu.vn'
    return generate.SHORT_NAME(name) + '@aty.edu.vn'
  },
  // SCHOOL_STATUS: () => {
  //   const status = Math.round(Math.random() * 2)
  //   return status === 1 ? 'Đang hoạt động'
  //     : status === 2 ? 'Sắp hoạt động' : 'Tạm đóng'
  // },
  STAFF_STATUS: () => {
    const status = Math.round(Math.random())
    return status > 0 ? staffStatus.WORKING : staffStatus.QUITTED
  },
  STAFF_INSURANCE_SALARY: salary => {
    return Math.round(Math.random()) > 0 ? salary : '5010000'
  },
  STAFF_OTHER_ALLOWANCE: () => {
    return Math.round(Math.random()) > 0 ? '500000' : '0'
  },
  STAFF_BANK: (name = '') => {
    let bankName = ''

    switch (Math.round(Math.random() * 5)) {
      case 0:
        bankName = 'Vietcombank'
        break
      case 1:
        bankName = 'Vietinbank'
        break
      case 2:
        bankName = 'TPBank'
        break
      case 3:
        bankName = 'Sacombank'
        break
      default:
        bankName = 'BIDV'
        break;
    }

    return ({
      bankName,
      bankAccount: faker.finance.account(12),
      bankAccountOwner: _convertVNToEn(name).toUpperCase()
    })
  }
  // USER_ROLE: () => {
  //   const roleId = Math.round(Math.random() * 10)
  //   return roleId === 1 ? 'Admin trường'
  //     : roleId === 2 ? 'Admin ATY' : 'Kế toán'
  // }
}

export default generate