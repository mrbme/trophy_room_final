import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
// import { postData } from '../../pages/api/users.js'

const Form = () => {
  const SignupSchema = Yup.object().shape({
    wallet: Yup.string()
      .min(10, 'Minimum 2 characters.')
      .required('Required')
  })

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
              values.email
            )
          ) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='wallet'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.wallet}
              className='rounded bg-black text-gray-100'
            />
            {errors.wallet && touched.wallet && errors.wallet}
            <button type='submit' className='text-white' disabled={isSubmitting}>
              Add wallet to whitelist
            </button>
          </form>
        )}
      </Formik>
    </>
  )
}
export default Form
