import mongoose from "mongoose"

const authSchema = new mongoose.Schema({ 
  

      name: {             // ---> Name of User
        type: String,
        required: true
    },
    email: {            // ---> Email Address of User
        type: String,
        required: true,
        unique: true,
    },
    password: {         // ---> Password of Account to be created
        type: String,
        required: true
    },
    verifyOtp: {        // ---> OTP(One Time Password) for Email Verification
        type: String,
        default: ''
    },
    verifyOtpExpiredAt: {        // ---> OTP expiration period for verify OTP
        type: Number,
        default: 0
    },
    isAccountVerified: {         // ---> Account Verification Check
        type: Boolean,
        default: false
    },
    resetOtp: {        // ---> OTP for reset password
        type: String,
        default: ''
    },
    resetOtpExpiredAt: {        // ---> OTP expiration period for reset OTP
        type: Number,
        default: 0
    },
 
},{
    timeStamp: true
})

const AuthModel = mongoose.models.auth || mongoose.model('auth',authSchema) //singleton: avoids error if already created
export default AuthModel