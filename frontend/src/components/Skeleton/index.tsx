import { SkeletonProps } from 'src/components/Skeleton/types'

import styles from 'src/components/Skeleton/styles.module.scss'

const Skeleton = ({ length }: SkeletonProps): JSX.Element => {
  return (
    <>
      {Array.from({ length: length }).map((_, index) => (
        <div className={styles.skeleton} key={index}></div>
      ))}
    </>
  )
}

export default Skeleton
