import { TitleProps } from 'src/components/Title/types'

const Title = ({ text, stylesProps }: TitleProps): JSX.Element => {
  return <h2 className={`${stylesProps}`}>{text}</h2>
}

export default Title
