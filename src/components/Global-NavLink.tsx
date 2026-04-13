"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<LinkProps, "href"> {
  to: string | Pick<URL, "pathname" | "search" | "hash">;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, children, ...props }, ref) => {
    const pathname = usePathname();
    const targetPath = typeof to === "string" ? to : to.pathname;
    const isActive = pathname === targetPath;
    const isPending = false;
    
    return (
      <Link
        ref={ref}
        href={to as any}
        className={cn(className, isActive && activeClassName, isPending && pendingClassName)}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
