import { useFormContext } from 'react-hook-form';
import { useId } from 'react-id-generator';
import FormError from './FormError';

export default function TextInput({
  type,
  label,
  name,
  minLength,
  maxLength,
  rules = {},
  placeholder,
  labelClass = '',
  inputClass = '',
  errorClass
}) {
  const { register, errors } = useFormContext();
  const [htmlId] = useId(1, name + '-');

  return (
    <label htmlFor={htmlId} className="block mb-4">
      {label && <span className={'label ' + labelClass}>{label}</span>}
      <input
        type={type ? type : 'text'}
        id={htmlId}
        className={inputClass}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        aria-invalid={errors[name] ? 'true' : 'false'}
        placeholder={placeholder}
        ref={register(rules)}
      />
      <FormError name={name} errorClass={errorClass}></FormError>
    </label>
  );
}
