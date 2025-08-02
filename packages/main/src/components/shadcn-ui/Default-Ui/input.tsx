import * as React from 'react'

import { cn } from 'src/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-lg border border-ld focus-visible:border-primary bg-transparent px-3 py-2  file:border-0  file:rounded-sm file:text-sm file:font-medium file:text-primary  file:bg-lightprimary  placeholder:text-muted-foreground dark:placeholder:text-white/30 disabled:cursor-not-allowed disabled:opacity-50 text-ld text-sm focus-visible:ring-0 focus-visible:outline-0',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
