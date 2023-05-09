import classNames from 'clsx'
import { CevronRight } from './Icons'

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
        'inline-flex items-center gap-2 font-mono',
        className
      )}
    >
      {withIcon && (
        <span>
          <CevronRight iconSize={iconSize} />
        </span>
      )}
      <span className='animate-typewriter overflow-hidden whitespace-nowrap'>
        {text}
      </span>{' '}
      <span className='animate-blink'>_</span>
    </Component>
  )
}

export default Typewriter
