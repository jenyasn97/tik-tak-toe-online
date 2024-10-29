import clsx from "clsx";

/**
 *@param{{
 * children,
 * clasName:string,
 * size: "md" | "lg",
 * variant: "primary" | "outline"
 * }} props
 */

function UIButton({ children, className, size, variant }) {
  const buttonClassNAme = clsx(
    "transition-colors",
    className,
    {
      md: "rounded px-6 py-2 text-sm leading-tight",
      lg: "rounded-lg px-5 py-2 text-2xl leading-tight",
    }[size],
    {
      primary: "bg-teal-600 text-white hover:bg-teal-500",
      outline: "border-teal-600 border text-teal-600 hover:bg-teal-50",
    }[variant],
  );
  return <button className={buttonClassNAme}>{children}</button>;
}

export default UIButton;
