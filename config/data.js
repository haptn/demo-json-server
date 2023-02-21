import { courseStatus, paymentMethod, schoolStatus, schoolType, taxStatus } from './constants.js'

const list = {
  SCHOOLS: [
    {
      id: '1',
      name: 'ATY Nguyễn Đình Chiểu',
      type: schoolType.CENTER,
      phone: '028 22433990',
      address: '112 Nguyễn Đình Chiểu, Đa Kao, Quận 1, Tp.HCM',
      status: schoolStatus.WORKING,
      taxCode: '0310449557',
    },
    {
      id: '2',
      name: 'Mầm non ATY',
      type: schoolType.KINDERGARTEN,
      phone: '028 38472182',
      address: '42 Cầu Xéo, Tân Quý, Tân Phú, Tp.HCM',
      status: schoolStatus.CLOSED,
      taxCode: '0310449557-001',
    },
    {
      id: '3',
      name: 'Trường Thủ Khoa Huân',
      type: schoolType.HIGH,
      phone: '0902950008',
      address: '481/8 Trường Chinh, Phường 14, Quận Tân Bình, Tp.HCM',
      status: schoolStatus.WORKING,
      taxCode: '0310449557-002',
    },
    {
      id: '4',
      name: 'Hệ thống Giáo dục ATY',
      type: schoolType.ESCALATOR,
      phone: '028 22433990',
      address: 'Quận 12, Tp.HCM',
      status: schoolStatus.WORKING,
      taxCode: '0310449557-003',
    },
    {
      id: '5',
      name: 'ATY Đà Nẵng',
      type: schoolType.CENTER,
      phone: '0236 12345678',
      address: 'Sơn Trà, Đà Nẵng',
      status: schoolStatus.PLANNING,
      taxCode: '0310449557-004',
    },
  ],
  COURSES: [    // Này là danh mục tất cả các khóa (trong phần thiết lập chung)
    {
      id: '1',
      name: 'Học kỳ quân đội Bộ binh sơ cấp',
      price: 8000000,
      description: '7-17 tuổi',
      status: courseStatus.READIED,
      schoolId: null,       // áp dụng cho...: null --> all schools | [...schoolIds]
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '2',
      name: 'Học kỳ quân đội Nâng cao',
      price: 11000000,
      description: '12-18 tuổi',
      status: courseStatus.READIED,
      schoolId: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '3',
      name: 'Hi! Teacher',
      price: 6000000,
      description: '7-12 tuổi',
      status: courseStatus.PAUSED,
      schoolId: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '4',
      name: 'International Bootcamp Bình Định',
      price: 5000000,
      description: '7-17 tuổi',
      status: courseStatus.READIED,
      schoolId: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '5',
      name: 'Bootcamp Kid Extreme',
      price: 12000000,
      description: '7-12 tuổi',
      status: courseStatus.READIED,
      schoolId: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '6',
      name: 'Bootcamp Teen Extreme',
      price: 15000000,
      description: '12-18 tuổi',
      status: courseStatus.COMING_SOON,
      schoolId: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '7',
      name: 'Phát triển kỹ năng lãnh đạo',
      price: 10000000,
      description: '12-20 tuổi',
      status: courseStatus.READIED,
      schoolId: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '8',
      name: 'Teen Leaders',
      price: 20000000,
      description: '12-20 tuổi',
      status: courseStatus.READIED,
      schoolId: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '9',
      name: 'Pre-Teen Leaders',
      price: 0,
      description: '12-20 tuổi',
      status: courseStatus.READIED,
      schoolId: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '10',
      name: 'Siêu Trí tuệ Teen-Kid',
      price: 6000000,
      description: '7-15 tuổi',
      status: courseStatus.READIED,
      schoolId: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '11',
      name: 'Sống mạnh mẽ',
      price: 4000000,
      description: '6-12 tuổi',
      status: courseStatus.READIED,
      schoolId: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '12',
      name: 'Học làm người nông dân',
      price: 5000000,
      description: '7-12 tuổi',
      status: courseStatus.PAUSED,
      schoolId: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '13',
      name: 'Thám du',
      price: 4000000,
      description: '10-15 tuổi',
      status: courseStatus.COMING_SOON,
      schoolId: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '14',
      name: 'Tư duy tích cực',
      price: 4000000,
      description: '12 tuổi trở lên',
      status: courseStatus.READIED,
      schoolId: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      id: '15',
      name: 'Dân vũ',
      price: 2000000,
      description: 'Không giới hạn độ tuổi',
      status: courseStatus.READIED,
      schoolId: null,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ],
  // CURRENT_COURSES: [    // Này là list tất cả các khóa đc tổ chức (đã/đang/sẽ)
  //   {
  //     id: '1',
  //     name: 'Học kỳ quân đội Bộ binh sơ cấp-1',
  //     price: 8000000,
  //     description: '7-17 tuổi',
  //     status: courseStatus.READIED,
  //     schoolId: null,       // áp dụng cho...: null --> all schools | [...schoolIds]
  //     createdAt: Date.now(),
  //     updatedAt: Date.now(),
  //   },
  // ],
  SETTINGS: [
    {
      id: '1',
      name: 'Nội bộ ATY',
      children: [
        // {
        //   id: '1.1',
        //   name: 'Tài khoản',
        //   pathName: '/settings/accounts',
        // },
        {
          id: '1.2',
          name: 'Trường & Cơ sở',
          pathName: '/settings/schools',
        },
        {
          id: '1.3',
          name: 'Lớp',
          pathName: '/settings/classes',
          description: 'Phần cấu hình này có thể khác nhau ở từng cơ sở, từng năm học'
        },
        {
          id: '1.4',
          name: 'Chương trình, khóa học',
          pathName: '/settings/courses',
          description: 'Danh sách tất cả các khóa học của ATY, học phí, mô tả,...'
        },
        // {
        //   id: '1.5',
        //   name: 'Học sinh, học viên',
        //   pathName: '/settings/students',
        // },
        // {
        //   id: '1.6',
        //   name: 'Nhân viên, giáo viên',
        //   pathName: '/settings/staffs',
        // },
        {
          id: '1.12',
          name: 'Học phí',
          pathName: '/settings/tuition-fees',
          description: 'Học phí từng cấp học, khối lớp, chương trình,...'
        },
        {
          id: '1.7',
          name: 'Bậc lương, thưởng, phụ cấp',
          pathName: '/settings/salary-levels',
        },
        {
          id: '1.8',
          name: 'Loại dịch vụ của trường',   // bán trú, nội trú, căn-tin,...
          pathName: '/settings/school-services',
        },
        {
          id: '1.9',
          name: 'Bảng giá bán trú, nội trú',
          pathName: '/settings/boarding-price',
          description: 'Bảng giá bán trú, nội trú dành cho HS nam/nữ, loại phòng, kỳ đóng (theo tháng/học kỳ/...)'
        },
        {
          id: '1.10',
          name: 'Bảng giá đồng phục',
          pathName: '/settings/uniforms-price',
        },
        {
          id: '1.11',
          name: 'Bảng giá thực đơn',
          pathName: '/settings/menu-price',
        },
      ],
    },
    {
      id: '2',
      name: 'Đối tác của ATY',  // Long Bình Tân, NK Người Có Công,... (nơi chuyên cho thuê địa điểm tổ chức chtr / trường học liên kết)
      children: [
        {
          id: '2.1',
          name: 'Loại đối tác',
          pathName: '/settings/partner-types',
        },
        {
          id: '2.2',
          name: 'Đối tác',
          pathName: '/settings/partners',
        },
      ],
    },
    {
      id: '3',
      name: 'Nghiệp vụ kế toán',
      children: [
        {
          id: '3.1',
          name: 'Khoản mục thu nhập',
          pathName: '/settings/income',
        },
        {
          id: '3.2',
          name: 'Khoản mục chi phí',
          pathName: '/settings/costs',
        },
        {
          id: '3.3',
          name: 'Hình thức thanh toán',   // tiền mặt, chuyển khoản NH, ví điện tử
          pathName: '/settings/payment-methods',
        },
        {
          id: '3.4',
          name: 'Loại tiền tệ',
          pathName: '/settings/currencies',
        },
        {
          id: '3.5',
          name: 'Loại chứng từ',
          pathName: '/settings/documents',
        },
        {
          id: '3.6',
          name: 'Chu kỳ làm mới sổ',  // hàng tháng/quý/học kỳ/năm học/năm
          pathName: '/settings/renew-cycle',
        },
      ],
    },
    {
      id: '4',
      name: 'Thuế, phí, bảo hiểm',
      children: [
        {
          id: '4.1',
          name: 'Loại thuế',
          pathName: '/settings/taxes',
        },
        {
          id: '4.2',
          name: 'Biểu thuế',
          pathName: '/settings/tariffs',
        },
        {
          id: '4.3',
          name: 'Loại phí',
          pathName: '/settings/fees',
        },
        {
          id: '4.4',
          name: 'Loại bảo hiểm',
          pathName: '/settings/insurances',
        },
      ],
    },
    // {
    //   id: '5',
    //   name: 'Ngân hàng',
    //   children: [
    //     {
    //       id: '5.1',
    //       name: 'Ngân hàng',
    //       pathName: '/settings/banks',
    //     },
    //     {
    //       id: '5.2',
    //       name: 'Tài khoản ngân hàng',
    //       pathName: '/settings/bank-accounts',
    //     },
    //   ],
    // },
    {
      id: '6',
      name: 'Tài sản',
      children: [
        {
          id: '6.1',
          name: 'Loại tài sản cố định',
          pathName: '/settings/fixed-assets',
        },
        {
          id: '6.2',
          name: 'Loại công cụ, dụng cụ',
          pathName: '/settings/equipments',
        },
        {
          id: '6.3',
          name: 'Đơn vị tính',
          pathName: '/settings/units',
        },
      ],
    },
    {
      id: '7',
      name: 'Hệ thống',
      children: [
        {
          id: '7.1',
          name: 'Thông tin công ty',
          pathName: '/settings/aty-info',
          description: 'Dùng để tự chèn thông tin của ATY vào hợp đồng, hóa đơn,...'
        },
        {
          id: '7.2',
          name: 'Thông tin chuyển khoản',
          pathName: '/settings/bank-accounts',
        },
        {
          id: '7.3',
          name: 'Tài khoản & Quyền hạn',
          pathName: '/settings/accounts',
          description: 'Quyền hạn xemthêm/xóa/sửa của mỗi tài khoản trong hệ thống'
        },
        {
          id: '7.4',
          name: 'Loại người dùng',
          pathName: '/settings/user-roles',
          description: 'Vai trò của người dùng trong hệ thống (VD: kế toán, admin,...)'
        },
      ],
    },
    {
      id: '8',
      name: 'Khác',
      children: [
        {
          id: '8.1',
          name: 'Tùy chỉnh Sidebar Menu',
          pathName: '/settings/sidebar-menu',
          description: 'Tùy chỉnh những mục được hiển thị trên sidebar menu bên trái'
        },
        {
          id: '8.2',
          name: 'Chức năng thêm nhanh',
          pathName: '/settings/quick-add',
        },
      ],
    },
  ],
  BANK_ACCOUNTS: [
    {
      id: '1',
      paymentMethod: paymentMethod.BANK,
      bankShortName: 'Vietcombank',
      accountNumber: '0071100xxxxxx',
      ownerName: 'Nguyễn Văn An'
    },
    {
      id: '2',
      paymentMethod: paymentMethod.BANK,
      bankShortName: 'TPBank',
      accountNumber: '0123xxxxxxx',
      ownerName: 'Nguyễn Văn An'
    },
    {
      id: '3',
      paymentMethod: paymentMethod.MOMO,
      bankShortName: 'Momo',
      accountNumber: '0987654321',
      ownerName: 'Nguyễn Văn An'
    }
  ],
  PAYMENT_METHODS: [
    {
      id: '1',
      name: paymentMethod.CASH,
    },
    {
      id: '2',
      name: paymentMethod.BANK,
    },
    {
      id: '3',
      name: paymentMethod.MOMO,
    },
    // {
    //   id: '4',
    //   name: paymentMethod.QR,
    // },
  ],
  CURRENCIES: [
    {
      id: 'vnd',
      name: 'Việt Nam đồng',
      shortName: 'VND',
      symbol: 'đ'
    },
    {
      id: 'usd',
      name: 'US Dollar',
      shortName: 'USD',
      symbol: '$'
    },
    {
      id: 'jpy',
      name: 'Yên Nhật',
      shortName: 'JPY',
      symbol: '¥'
    },
  ],
  TAXES: {
    LIST: [],
    TYPE: [
      {
        id: '1',
        name: 'Thuế giá trị gia tăng',
        shortName: 'GTGT',
        value: 5,
        unit: '%',
        status: taxStatus.ACTIVE
      },
      {
        id: '2',
        name: 'Thuế thu nhập cá nhân',
        shortName: 'TNCN',
        value: '',
        unit: '%',
        status: taxStatus.ACTIVE
      },
      {
        id: '3',
        name: 'Thuế thu nhập doanh nghiệp',
        shortName: 'TNDN',
        value: 20,
        unit: '%',
        status: taxStatus.ACTIVE
      },
      {
        id: '4',
        name: 'Thuế môn bài',
        shortName: '',
        value: 3000000,
        unit: 'đồng',
        status: taxStatus.ACTIVE
      },
      {
        id: '5',
        name: 'Thuế tài nguyên',
        shortName: '',
        value: '',
        unit: '%',
        status: taxStatus.INACTIVE
      },
      {
        id: '6',
        name: 'Thuế xuất nhập khẩu',
        shortName: '',
        value: '',
        unit: '%',
        status: taxStatus.INACTIVE
      },
      {
        id: '7',
        name: 'Thuế bảo vệ môi trường',
        shortName: '',
        value: '',
        unit: '%',
        status: taxStatus.INACTIVE
      },
    ]
  },
  TUITION_FEES: [
    {
      id: '',
      name: '',
      price: '',
      schoolType: ''
    },
  ],
  SALARY_LEVELS: {
    SALARY: [
      {
        id: 's1',
        name: 'GV cơ hữu',
        level: 1,
        value: 0,
      },
      {
        id: 's2',
        name: 'GV thỉnh giảng',
        level: 1,
        value: 0,
      },
      {
        id: 's3',
        name: 'GV Bộ môn',
        level: 1,
        value: 0,
      },
      {
        id: 's4',
        name: 'GV tiếng Anh',
        level: 1,
        value: 0,
      },
      {
        id: 's5',
        name: 'GV tiếng Nhật',
        level: 1,
        value: 0,
      },
      {
        id: 's7',
        name: 'Quản sinh KTX',
        level: 1,
        value: 0,
      },
      {
        id: 's8',
        name: 'Kế toán',
        level: 1,
        value: 0,
      },
      {
        id: 's9',
        name: 'NV kinh doanh',
        level: 1,
        value: 0,
        description: 'Thu nhập 1 tháng = Lương + thưởng KPI'
      },
      {
        id: 's10',
        name: 'NV tuyển sinh',
        level: 1,
        value: 0,
        description: 'Thu nhập 1 tháng = Lương + thưởng KPI'
      },
      {
        id: 's11',
        name: 'Bảo mẫu bán trú',
        level: 1,
        value: 0,
      },
      {
        id: 's12',
        name: 'NV vệ sinh',
        level: 1,
        value: 0,
      },
      {
        id: 's6',
        name: 'Bảo vệ',
        level: 1,
        value: 0,
      },
      {
        id: 's13',
        name: 'Giám đốc',
        level: 1,
        value: 0,
      },
    ],
    BONUS: [
      {
        id: 'b1',
        name: 'Lương T13',
        value: '',
        description: '1 tháng lương, tùy thuộc vào lương mỗi người mà giá trị sẽ khác nhau'
      },
      {
        id: 'b2',
        name: 'Thưởng Tết',
        value: '',
        description: 'Tùy thuộc tình hình kinh doanh hàng năm'
      },
      {
        id: 'b3',
        name: 'Thưởng hiệu quả công việc',
        value: '',
        description: '+5% vào lương tháng đó'
      },
      {
        id: 'b4',
        name: 'Quà 20/10',
        value: '',
        description: 'Quà ngày Nhà giáo Việt Nam'
      },
    ],
    ALLOWANCE: [
      {
        id: 'a1',
        name: 'Phụ cấp Thâm niên',
        value: '200.000 đ/tháng',
        description: 'Cứ sau mỗi 2 năm thâm niên, cộng trực tiếp vào lương cứng 200.000 đ/tháng'
      },
      {
        id: 'a2',
        name: 'Phụ cấp Phụ đạo',
        value: '100.000 đ/buổi/2 tiếng',
        description: '1 tháng lương'
      },
      {
        id: 'a3',
        name: 'Phụ cấp Chứng chỉ chuyên môn',
        value: '100.000 đ - 200.000 đ/chứng chỉ',
        description: 'Phụ cấp tùy thuộc vào độ khó và độ phổ biến của từng loại chứng chỉ'
      },
    ]
  },

}

export default list