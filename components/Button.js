export default function Button({
  type = 'button',
  disabled = false,
  ariaLabel = 'Button',
  ariaExpanded,
  onClick,
  className,
  children
}) {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
