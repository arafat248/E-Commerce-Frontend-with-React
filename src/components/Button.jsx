import { Link } from "react-router-dom";

const Button = ({ children, variant = "primary", size = "md", asLink, to, className, ...props }) => {
  const base = "font-semibold rounded-lg transition-all focus:outline-none inline-flex items-center justify-center";
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-900",
    secondary: "bg-secondary text-white hover:bg-red-600",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (asLink && to) return <Link to={to} className={classes}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
};

export default Button;