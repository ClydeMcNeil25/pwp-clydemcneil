import {Application} from 'express'
import {Request, Response} from 'express'
import { check, validationResult } from 'express-validator'
const express = require('express')
const morgan = require('morgan')
const bodyParser = require("body-parser")
const Recaptcha = require('express=recaptcha').RecaptchaV2
const formData = require("form-data")
const Mailgun = require("mailgun.js")
require('dotenv').config()

//start express app
const app: Application = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const recaptcha = new Recaptcha(process.env.RECAPTCHA_SITE_KEY, process.env.RECAPTCHA_SECRET_KEY)
const mailgun = new Mailgun(formData)
const mailgunClient = mailgun.client({username: "api", key: process.env.MAILGUN_API_KEY})
const handleGetRequest = ((request: Request, response: Response)=> {
  return response.json("this thing is on!")
})
const validation = [
  check("firstname", "A valid name is required.").not().isEmpty().trim().escape(),
  check("lastname", "A valid name is required.").not().isEmpty().trim().escape(),
  check("email", "Please provide a valid email.").isEmail(),
  check("category").not().isEmpty().trim().escape(),
  check("message", "A message must be shorter than 1000 characters.").trim().escape().isLength({min:1, max:1000})
]
function handlePostRequest(request: Request, response: Response) {
  response.append("Content-Type", "text/html")
  response.append("Access-Control-Allow-Origin", "*")
  // the names listed in the HTML & JS files respectively
  const {firstname, lastname, message, category, email} = request.body

  //@ts-ignore typescript does not know request.recaptcha was set by the express-recaptcha middleware
  if(request.recaptcha.error) {
    return response.send(`<div class='alert alert-danger' role='alert'><strong>Oh Snap!</strong> There was a Recaptcha error. Please try again.</div>`)
  }

  const mailgunMessage = {
    from: `${firstname}<postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
    to: process.env.MAIL_RECIPIENT,
    subject: `${email}:${category}`,
    text:message
  }

  mailgunClient.messages.create(process.env.MAILGUN_DOMAIN, mailgunMessage).then((msg: any) => response.send
    (`<div class="alert alert-success" role="alert">Email Sent Successfully</div>`
  )).catch((error: any) => {
    console.error(error)
    return response.send(`<div class='alert alert-danger' role='alert'><strong>Oh Snap!</strong> Email Failed. Please try again.</div>`)
  })

  const errors = validationResult(request)
  if (errors.isEmpty() === false) {
    const currentError = errors.array()[0]
    return response.send(`<div class="alert alert-danger" role="alert"><strong>On Snap!</strong>${currentError.msg}</div>`)
  }

}

const indexRoute = express.Router()

indexRoute.route('/')
  .get(handleGetRequest).post(recaptcha.middleware.verify, validation, handlePostRequest)
app.use('/apis', indexRoute)

app.listen(4200, () => {
  console.log("express built successfully")
})