export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold transition-smooth active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm rounded-xl",
    default: "px-8 py-4 text-base rounded-xl",
    lg: "px-10 py-5 text-lg rounded-2xl",
  };

  const variantClasses = {
    primary: "btn-primary",
    outline: "border border-glass-border glass hover:bg-white/5",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

