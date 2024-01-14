import styles from '@/styles/base/svg/LoadingBar.module.scss'
import { HTMLAttributes } from 'react';

var LoadingBar = (props: HTMLAttributes<HTMLDivElement>) => {
    return <div className={styles.loadingBar} {...props}></div>
}
export default LoadingBar;
