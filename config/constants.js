// ============ Constants ============
export const BASE_SALARY = 1490000   // mức lương cơ sở (1,49tr/tháng) =/= lương tối thiểu vùng (5tr010)


export const userRole = {
  ACCOUNTER: 'Kế toán',
  SCHOOL_ADMIN: 'Quản lý chi nhánh',
  ADMIN: 'Quản trị hệ thống'
  // SCHOOL_ADMIN: 'Admin trường',
  // ADMIN: 'Admin ATY'
}

export const schoolStatus = {
  PLANNING: 'Sắp hoạt động',
  WORKING: 'Đang hoạt động',
  CLOSED: 'Tạm đóng'
}

export const schoolType = {
  CENTER: 'Trung tâm',
  ESCALATOR: 'Liên cấp',
  HIGH: 'Cấp 3',
  SECONDARY: 'Cấp 2',
  PRIMARY: 'Cấp 1',
  KINDERGARTEN: 'Mẫu giáo'
}

export const staffStatus = {
  WORKING: 'Đang làm',
  QUITTED: 'Đã nghỉ'
}

export const courseStatus = {
  READIED: 'Sẵn sàng',
  PAUSED: 'Tạm dừng',
  COMING_SOON: 'Sắp ra mắt'
}
export const classStatus = {
  COMING_SOON: 'Dự kiến',       // chưa diễn ra, chưa ấn định time tổ chức
  ENROLLING: 'Đang tuyển sinh', // chưa diễn ra, đã ấn định time cụ thể
  ON_GOING: 'Đang diễn ra',
  ENDED: 'Đã kết thúc',
  CANCELLED: 'Đã hủy'
}

export const activityStatus = {
  COMING_SOON: 'Dự kiến',
  PREPARING: 'Chuẩn bị',  // trong khoảng từ ngày thông báo --> trước lúc bắt đầu
  ON_GOING: 'Đang diễn ra',
  ENDED: 'Đã kết thúc',
  CANCELLED: 'Đã hủy'
}

export const paymentMethod = {
  CASH: 'Tiền mặt',
  BANK: 'Chuyển khoản Ngân hàng',
  MOMO: 'Ví Momo',
  QR: 'Quét QR'
}

export const taxTypeStatus = {
  ACTIVE: 'Đang áp dụng',
  INACTIVE: 'Không áp dụng'
}
export const taxStatus = {
  NOT_SUBMITTED: 'Chưa nộp',
  SUBMITTED: 'Đã nộp'
}
export const taxPeriod = {
  MONTH: 'Theo tháng',
  QUARTER: 'Theo quý',
  YEAR: 'Theo năm',
}
export const taxDeclarationType = {
  FIRST_TIME: 'Lần đầu',
  UPDATE_1: 'Bổ sung lần 1',
  UPDATE_2: 'Bổ sung lần 2',
}