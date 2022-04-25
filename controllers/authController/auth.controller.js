
const User = require('../../models/user.model')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { findOne } = require('../../models/user.model')


// for login API

const login = async (req, res) => {
    const { email, password } = req.body
    const schema = Joi.object({
        email: Joi.string().email().required().trim(),
        password: Joi.string().required().trim()
    })

    var validSchema = schema.validate(req.body)  //VALIDATING REQ.BODY DATA

    if (validSchema.error) {
        return res.status(400).json({
            message: validSchema.error.message || "Bad Request",
            status: 400
        })
    }

    try {
        // FINDING USER ACCOUNT
        const user = await User.findOne({ email })
        if (user) {
            const matchingPassword = await bcrypt.compare(password, user.password) //MATCHING THE PASSWORD
            if (matchingPassword) {
                const token = jwt.sign({ user }, process.env.SECRECT_KEY)       // CREATING JWT TOKEN
                return res.status(200).json({
                    massage:'login successfully',
                    token
                })
            }else{
                return res.status(401).json({
                    error:'email or password in not correct',
                })
            }
        }else{
            return res.status(404).json({
                error:'User does not exist with this email',
                
            })
        }

    } catch (error) {
        return res.status(500).json({
            massage:'Internal server error',
            error
            
        })
    }

}


// signup or Registeration API
const signup = async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body
    console.log(req.body);
    const schema = Joi.object({
        name: Joi.string().trim().required().min(3),
        email: Joi.string().email().required().trim(),
        password: Joi.string().required().trim().min(6).max(16),
        role: Joi.string().valid('ADMIN', 'USER').default('USER')
    })

    var validSchema = schema.validate(req.body)

    if (validSchema.error) {
        return res.status(400).json({
            message: validSchema.error.message || "Bad Request",
            status: 400
        })
    }

    const payload = validSchema.value

    try {
        // CHECKING USER EXISTIGN OR NOT
        console.log('ds');
        const checkUser = await User.findOne({ email })
        console.log('dssssssssss');

        if (checkUser) {
            return res.status(400).json({ error: [{ msg: 'Email is already exist.' }] })
        }

        // GENERATE HASH PASSWORD
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        try {
            // CREATING NEW USER
            console.log('ds');
            const createUser = await User.create({
                ...payload,
                password: hashPassword
            })
            // CREATING JWT TOKEN
            const token = jwt.sign({ user: createUser }, process.env.SECRECT_KEY)

            return res.status(200).json({
                massage: ' Your account has been created ',
                token
            })

        } catch (error) {
            return res.status(500).json({
                massage:'Internal server error',
                error
                
            })        }

    } catch (error) {
        return res.status(500).json({
            massage:'Internal server error',
            error
            
        })    }




}

module.exports = {
    login,
    signup
}