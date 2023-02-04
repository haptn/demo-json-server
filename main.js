// const { queryString } = require('query-string')
// const jsonServer = require('json-server')
import queryString from 'query-string'
import jsonServer from 'json-server'
import cors from 'cors'
const server = jsonServer.create()
server.use(cors())
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  const now = Date.now()
  if (req.method === 'POST') {
    req.body.createdAt = now
  }
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
    req.body.updatedAt = now
  }

  // Continue to JSON Server router
  next()
})

// Custom output (response body) for LIST with pagination
router.render = (req, res) => {
  // Check GET with pagination
  // If yes ==> Custom response body

  // console.log(req.query); // {}   // Thằng json-server này sau khi nhận request, nó lưu mọi thứ trong query vào biến tạm rồi sau đó xóa hết query ở trong request ban đầu nên mình ko thể check đc từ req mà phải bắt header ở res (đọc thêm source code xử lý trên git của thư viện này)

  const headers = res.getHeaders()
  const totalCountHeader = headers['x-total-count']
  if (req.method === 'GET' && totalCountHeader) {
    const queryParams = queryString.parse(req?._parsedUrl?.query)

    console.log({ queryParams });

    const result = {
      data: res.locals.data,
      pagination: {
        _page: +queryParams?._page ?? 1,
        _limit: +queryParams?._limit ?? 10,
        _total: +totalCountHeader
      }
    }

    return res.jsonp(result)
  }
  // res.jsonp({
  //   data: res.locals.data,
  // })



  // Otherwise, keep default behavior
  res.jsonp(res.locals.data)
}

// Use default router
server.use('/api', router)

// Start server
const PORT = process.env.PORT || 3005   // used for deploying on Heroku
server.listen(PORT, '127.0.0.1')