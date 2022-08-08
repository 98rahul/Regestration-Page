import React, { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-number-input'
import styles from './Page.module.css'
import Button from '../Button/Button'
// import DashBoard from "./DashBoard";
import { useHistory } from 'react-router-dom'
const Page = () => {
  const history = useHistory()

  const [formData, setFormData] = useState({
    // another way to do-->>>
    userName: {
      value: '',
      error: null,
    },
    email: {
      value: '',
      error: null,
    },
    password: {
      value: '',
      error: null,
    },
    confirmPassword: {
      value: '',
      error: null,
    },
    city: {
      value: '',
      error: null,
    },
    mobileNumber: {
      value: '',
      error: null,
    },
  })

  const onChangeHandler = (field, value) => {
    setFormData({ ...formData, [field]: { value: value, error: null } })
    console.log('formData', formData)
  }
  /** one shot validation--->>>on submit all field validation should triggered use flag on each passing validation
   * step wise validation--->>and 2nd woy , return directly -->>> step validation (simply return true(on validation))....
   *
   *
   */
  const validate = () => {
    let flag
    if (!formData.userName.value || formData.userName.value.length < 3) {
      setFormData((prevstate) => {
        return { ...prevstate, userName: { error: true } }
      })
      flag = true
    } else if (formData.userName.value.length > 24) {
      setFormData((prevstate) => {
        return { ...prevstate, userName: { error: true } }
      })

      flag = true
    }
    let regx = /^([a-z0-9.-]+)@([a-z0-9-]+).([a-z]{2,3})(.[a-z]{2,6})?/
    if (!regx.test(formData.email.value)) {
      setFormData((prevstate) => {
        return { ...prevstate, email: { error: true } }
      })
      flag = true
    }

    if (!formData.password.value || formData.password.value.trim().length < 6) {
      setFormData((prevstate) => {
        return { ...prevstate, password: { error: true } }
      })
      flag = true
    }

    if (
      formData.confirmPassword.value === '' ||
      formData.confirmPassword.value !== formData.password.value
    ) {
      setFormData((prevstate) => {
        return { ...prevstate, confirmPassword: { error: true } }
      })
      flag = true
    }
    if (formData.city.value === '') {
      setFormData((prevstate) => {
        return { ...prevstate, city: { error: true } }
      })
      flag = true
    }
    console.log('90')
    // if(formData.mobileNumber.trim()==="" || formData.mobileNumber.trim().length>10){
    //   console.log("92");
    //   setFormData((prevstate) => {
    //     return { ...prevstate, mobileNumber: { error: true } };
    //   });
    //   flag=true;
    // }
    return flag
  }

  const FormSubmitHandler = (event) => {
    event.preventDefault()
    const errors = validate()

    if (!errors) {
      history.push('/home/dashboard')
    }
  }
  console.log('99', formData)
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 style={{ textAlign: 'center' }}>Register</h1>
        <form className={styles.form} onSubmit={FormSubmitHandler}>
          <div className={styles.label}>
            <label htmlFor="userName" style={styles.grey}>
              Username
            </label>
            <input
              className={`${formData.userName.error && styles.Invalid}`}
              id="userName"
              type="text"
              placeholder="Enter username"
              value={formData.userName.value}
              onChange={(e) => {
                onChangeHandler('userName', e.target.value)
              }}
            />
            {formData.userName.error && (
              <p style={{ color: 'red', fontSize: '12px' }}>
                Username should be greater than 3 characters
              </p>
            )}
          </div>
          <div className={styles.label}>
            <label htmlFor="email" style={{ color: 'grey' }}>
              Email
            </label>
            <input
              className={`${formData.email.error && styles.Invalid}`}
              id="email"
              type="text"
              placeholder="Enter email"
              value={formData.email.value}
              onChange={(e) => {
                onChangeHandler('email', e.target.value)
              }}
            />
            {formData.email.error && (
              <p style={{ color: 'red', fontSize: '12px' }}>
                Email is not valid
              </p>
            )}
          </div>
          <div className={styles.label}>
            <label htmlFor="password" style={{ color: 'grey' }}>
              Password
            </label>
            <input
              className={`${formData.password.error && styles.Invalid}`}
              id="password"
              type="text"
              placeholder="Enter password"
              value={formData.password.value}
              onChange={(e) => {
                onChangeHandler('password', e.target.value)
              }}
            />
            {formData.password.error && (
              <p style={{ color: 'red', fontSize: '12px' }}>
                Password must be atleast 6 characters
              </p>
            )}
          </div>
          <div className={styles.label}>
            <label htmlFor="confirmPassword" style={{ color: 'grey' }}>
              Confirm Password
            </label>
            <input
              className={`${formData.confirmPassword.error && styles.Invalid}`}
              id="confirmPassword"
              type="text"
              placeholder="Enter password again"
              value={formData.confirmPassword.value}
              onChange={(e) => {
                onChangeHandler('confirmPassword', e.target.value)
              }}
            />
            {formData.confirmPassword.error && (
              <p style={{ color: 'red', fontSize: '12px' }}>
                Password doesn't match
              </p>
            )}
          </div>
          <div className={styles.label}>
            <label htmlFor="city"> City </label>
            <div
              className={`${styles.city} ${
                formData.city.error && styles.Invalid
              }`}
            >
              <label id="City">Choose the City</label>
              {/* <div className={styles.main}> */}
              <select
                id="City"
                onChange={(e) => {
                  onChangeHandler('city', e.target.value)
                }}
              >
                <option>select</option>
                <option>Hyderabad</option>
                <option>Jaipur</option>
                <option>Banglore</option>
                <option>Noida</option>
                <option>Ahmedabad</option>
              </select>
            </div>
            {formData.city.error && (
              <p
                style={{
                  color: 'red',
                  fontSize: '12px',
                  position: 'relative',
                }}
              >
                Please select city
              </p>
            )}
          </div>
          {/* <div className={styles.label}>
            <label htmlFor="mobile"> Mobile Number</label>
            <input id="mobile"
            className ={`${formData.mobileNumber.error && styles.Invalid}`}
              placeholder="+91"
              type="tel"
              value={formData.mobileNumber.value}
              onChange={(e)=>{
                onChangeHandler("mobileNumber", e.target.value)
              }}
            />
            {formData.mobileNumber.error && (
              <p style={{ color: "red", fontSize: "12px" }}>
                Please enter valid phone number
              </p>
            )}
          </div> */}
          <div className={styles.label}>
            {/* <label htmlFor="number">Phone Number</label> */}
            {/* <PhoneInput
              // id="number"
              // className={`${formData.userName.error && styles.Invalid}`}`
              placeholder="Enter phone number"
              value={formData.mobileNumber.value}
              onChange={(e) => {
                onChangeHandler("mobileNumber", e.target.value)
              }}
            /> */}
          </div>

          <Button />
        </form>
      </div>
      {/* {formData} */}
    </div>
  )
}
export default Page
