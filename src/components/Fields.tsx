const formClasses =
  'block w-full appearance-none rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:bg-white focus:outline-none focus:ring-primary-500 sm:text-sm';

function Label({ id, children }: any) {
  return (
    <label
      htmlFor={id}
      className='block text-sm font-medium text-neutral-700'
    >
      {children}
    </label>
  );
}
export function TextField({
  id,
  label,
  type = 'text',
  className = '',
  ...props
}: any) {
  return (
    <div className={'grid gap-1 ' + className}>
      {label && <Label id={id}>{label}</Label>}
      <input
        id={id}
        type={type}
        {...props}
        className={formClasses}
      />
    </div>
  );
}
export function SelectField({
  id,
  label,
  className = '',
  ...props
}: any) {
  return (
    <div className={'grid gap-1 ' + className}>
      {label && <Label id={id}>{label}</Label>}
      <select
        id={id}
        {...props}
        className={`${formClasses} pr-8`}
      />
    </div>
  );
}
