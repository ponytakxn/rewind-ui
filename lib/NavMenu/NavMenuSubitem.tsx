import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps, forwardRef } from 'react'

const navMenuSubitemStyles = cva(['max-w-full'], {
  variants: {
    variant: {
      button:
        'grid gap-xxxs hover:bg-primary hover:text-secondary lg:p-xs p-xxs transition-colors text-start text-[14px]',
      link: 'inline-block tracking-wider leading-4 lg:pb-[1px] p-xxs text-[14px] hover:bg-primary hover:text-secondary hover:underline transition-colors ease-in-out duration-40',
    },
  },
})

type Props = {
  href?: string
  title?: string
  onClick?: () => void
}

type NavMenuSubItemProps = ComponentProps<'div'> &
  Props &
  VariantProps<typeof navMenuSubitemStyles>

export const NavMenuSubItem = forwardRef<HTMLDivElement, NavMenuSubItemProps>(
  ({ children, className, variant, title, href, onClick, ...props }, ref) => {
    return (
      <div ref={ref} className={navMenuSubitemStyles({ className })} {...props}>
        {variant == 'button' && (
          <button
            className={navMenuSubitemStyles({ variant })}
            onClick={onClick}
          >
            <p className='leading-none font-medium tracking-wider'>{title}</p>
            <p className='line-clamp-2 text-pretty tracking-wide'>{children}</p>
          </button>
        )}
        {variant == 'link' && (
          <a className={navMenuSubitemStyles({ variant })} href={href}>
            {children}
          </a>
        )}
      </div>
    )
  }
)
