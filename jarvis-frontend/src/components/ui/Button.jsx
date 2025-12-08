import { cn } from "../../utils/cn";

export function Button({ children, className, variant = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm transition focus:outline-none focus:ring-2 focus:ring-black";

  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    secondary:
      "bg-white text-black border border-gray-300 hover:bg-black hover:text-white",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}