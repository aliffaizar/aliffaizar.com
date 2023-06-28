import classNames from 'clsx'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

type Props = {
  text: string
  className?: string
  withIcon?: boolean
  iconSize?: string
  as?: React.ElementType
}

const Typewriter = (props: Props) => {
  const { text, className, as = 'h3', withIcon, iconSize, ...rest } = props

  const Component = as

  return (
    <Component
      className={classNames(
        'inline-flex items-center font-mono text-2xl md:text-3xl lg:text-5xl w-full',
        className,
      )}
    >
      <ChevronRightIcon className='w-6 h-6 md:w-8 md:h-8 lg:h-12 lg:w-12' />
      <span className='animate-typewriter overflow-hidden whitespace-nowrap text-white'>
        {text}
      </span>
      <span className='animate-blink'>_</span>
    </Component>
  )
}

export default Typewriter
