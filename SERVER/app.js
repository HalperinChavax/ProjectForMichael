const express=require('express')
const app=express()
const cors=require('cors')
const movies=require('./Routes/movieRouter')
const auth=require('./Routes/authinticationRouter')
const user=require('./Routes/userRouter')
const member=require('./Routes/memberRouter')
const sub=require('./Routes/subscriptionRouter')

require('./db')
app.use(express.json())
app.use(cors())
app.use('/movies',movies)
app.use('/auth',auth)
app.use('/users',user)
app.use('/members',member)
app.use('/sub',sub)


app.listen(3050,()=>{
    console.log('hello from my server on port 3050')
})

