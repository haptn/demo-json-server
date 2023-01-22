// ============ Helpers (Functions) ============
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

// ============ Generators (Functions) ============
export const _generateEmail = (name = '') => {
  const arr = name?.split(' ')
  const lastName = _convertVNToEn(arr[arr?.length - 1]?.toLowerCase())
  let shortName = lastName

  shortName += arr?.map(item => _convertVNToEn(item?.toLowerCase())
    ?.slice(0, 1))?.join('')
  shortName = shortName?.substring(0, shortName?.length - 1)

  return shortName + '@aty.edu.vn'
}

export const _generateSchoolStatus = () => {
  const status = Math.round(Math.random() * 2)
  return status === 1 ? 'Đang hoạt động'
    : status === 2 ? 'Sắp hoạt động' : 'Tạm đóng'
}

export const _generateStaffStatus = () => {
  const status = Math.round(Math.random())
  return status === 1 ? 'Đang làm' : 'Đã nghỉ'
}

export const _generateRole = () => {
  const roleId = Math.round(Math.random() * 10)

  return roleId === 1 ? 'Admin trường'
    : roleId === 2 ? 'Admin ATY' : 'Kế toán'
}