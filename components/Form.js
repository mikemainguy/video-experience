import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

export default function Form({
  formClass = '',
  onSubmit,
  resetOnSubmit = false,
  mode = 'onChange',
  showSubmit = true,
  submitText = 'Submit',
  submitClass = '',
  showCancel = false,
  cancelText = 'Cancel',
  cancelClass,
  children,
  disableIfErrors = true,
  defaultValues = {}
}) {
  const form = useForm({
    mode,
    criteriaMode: 'all',
    defaultValues
  });

  const resetForm = () => {
    form.reset(defaultValues);
  };

  useEffect(() => {
    if (resetOnSubmit) {
      resetForm();
    }
  }, [form.formState.isSubmitted]);

  return (
    <FormProvider {...form}>
      <form className={formClass} onSubmit={form.handleSubmit(onSubmit)}>
        {children}
        <div className="flex items-center">
          {showCancel && (
            <span className={cancelClass} onClick={() => resetForm()}>
              {cancelText}
            </span>
          )}
          {showSubmit && (
            <input
              className={submitClass}
              type="submit"
              disabled={form.formState.isSubmitting || !form.formState.isDirty}
              value={submitText}
            />
          )}
        </div>
      </form>
    </FormProvider>
  );
}
