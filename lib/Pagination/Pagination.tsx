import { cva } from 'class-variance-authority'
import { ComponentProps, forwardRef } from 'react'
import { cn } from '../utils'

const paginationStyles = cva(['max-w-[-webkit-fill-available]'])

const pageItemStyles =
  'bg-transparent border-none h-8 w-8 mx-1 rounded-[50%] font-bold cursor-pointer text-primary hover:underline focus:outline-0'

const sidesStyles =
  'shadow-[transparent_0_0_0_1px_transparent_0_0_0_4px_rgba(0,0,0,0.18)_0_2px_4px] hover:no-decoration hover:shadow-[transparent_0_0_0_1px_transparent_0_0_0_4px_rgba(0,0,0,0.12)_0_6px_16px]'

const activeStyles = '!bg-primary !text-secondary !min-w-8'

const separatorStyles = 'w-4 mx-1'

export interface Props {
  page: number
  totalPages: number
  handlePagination: (page: number) => void
  slug: string
}

type PaginationProps = ComponentProps<'div'> & Props

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  ({ page, totalPages, handlePagination, slug, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(paginationStyles({ className }))} {...props}>
        <div className='py-8 flex justify-center'>
          {page !== 1 && (
            <a href={`/${slug}${page - 1}`}>
              <button
                onClick={() => handlePagination(page - 1)}
                className={`${pageItemStyles} ${sidesStyles}`}
              >
                &lt;
              </button>
            </a>
          )}

          <a href={`/${slug}1`}>
            <button
              onClick={() => handlePagination(1)}
              className={
                page === 1
                  ? `${pageItemStyles} ${activeStyles}`
                  : pageItemStyles
              }
            >
              {1}
            </button>
          </a>

          {page > 3 && <div className={separatorStyles}>...</div>}

          {page === totalPages && totalPages > 3 && (
            <a href={`/${slug}${page - 2}`}>
              <button
                onClick={() => handlePagination(page - 2)}
                className={pageItemStyles}
              >
                {page - 2}
              </button>
            </a>
          )}

          {page > 2 && (
            <a href={`/${slug}${page - 1}`}>
              <button
                onClick={() => handlePagination(page - 1)}
                className={pageItemStyles}
              >
                {page - 1}
              </button>
            </a>
          )}

          {page !== 1 && page !== totalPages && (
            <button
              onClick={() => handlePagination(page)}
              className={`${pageItemStyles} ${activeStyles}`}
            >
              {page}
            </button>
          )}

          {page < totalPages - 1 && (
            <a href={`/${slug}${page + 1}`}>
              <button
                onClick={() => handlePagination(page + 1)}
                className={pageItemStyles}
              >
                {page + 1}
              </button>
            </a>
          )}

          {page === 1 && totalPages > 3 && (
            <a href={`/${slug}${page + 2}`}>
              <button
                onClick={() => handlePagination(page + 2)}
                className={pageItemStyles}
              >
                {page + 2}
              </button>
            </a>
          )}

          {page < totalPages - 2 && <div className={separatorStyles}>...</div>}

          <a href={`/${slug}${totalPages}`}>
            <button
              onClick={() => handlePagination(totalPages)}
              className={
                page === totalPages
                  ? `${pageItemStyles} ${activeStyles}`
                  : pageItemStyles
              }
            >
              {totalPages}
            </button>
          </a>

          {page !== totalPages && (
            <a href={`/${slug}${page + 1}`}>
              <button
                onClick={() => handlePagination(page + 1)}
                className={`${pageItemStyles} ${sidesStyles}`}
              >
                &gt;
              </button>
            </a>
          )}
        </div>
      </div>
    )
  }
)
