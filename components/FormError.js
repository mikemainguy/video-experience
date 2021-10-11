import { useFormContext } from 'react-hook-form';

export default function FormError({
  name,
  errorClass = 'mt-1 font-xs font-bold text-red-500'
}) {
  const { errors } = useFormContext();

  return (
    <>
      {errors[name] && errors[name].type === 'required' && (
        <p className={errorClass} role="alert">
          {errors[name].message ? errors[name].message : 'This is required.'}
        </p>
      )}
      {errors[name] && errors[name].type === 'min' && (
        <p className={errorClass} role="alert">
          {errors[name].message ? errors[name].message : 'Min number not met.'}
        </p>
      )}
      {errors[name] && errors[name].type === 'max' && (
        <p className={errorClass} role="alert">
          {errors[name].message ? errors[name].message : 'Max number exceeded.'}
        </p>
      )}
      {errors[name] && errors[name].type === 'minLength' && (
        <p className={errorClass} role="alert">
          {errors[name].message ? errors[name].message : 'Min length not met.'}
        </p>
      )}
      {errors[name] && errors[name].type === 'maxLength' && (
        <p className={errorClass} role="alert">
          {errors[name].message ? errors[name].message : 'Max length exceeded.'}
        </p>
      )}
      {errors[name] && errors[name].type === 'pattern' && (
        <p className={errorClass} role="alert">
          {errors[name].message
            ? errors[name].message
            : 'Pattern does not meet requirements.'}
        </p>
      )}
      {errors[name] && errors[name].type === 'email' && (
        <p className={errorClass} role="alert">
          {errors[name].message ? errors[name].message : 'Not a valid email.'}
        </p>
      )}
      {errors[name] && errors[name].type === 'phone' && (
        <p className={errorClass} role="alert">
          {errors[name].message
            ? errors[name].message
            : 'Not a valid phone number.'}
        </p>
      )}
      {errors[name] && errors[name].type === 'date' && (
        <p className={errorClass} role="alert">
          {errors[name].message ? errors[name].message : 'Not a valid date.'}
        </p>
      )}
    </>
  );
}
