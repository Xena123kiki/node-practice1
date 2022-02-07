const express = require("express")

const dotenv = require("dotenv")
dotenv.config()

const app = express()

app.set('port', process.env.PORT)

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 연결 중')
})
