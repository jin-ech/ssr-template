
import Link from "next/link";
import userLogo from '@/assets/icon/user.svg';
import Image from "next/image";

import styles from './index.module.scss';

const LayoutHeader = () => {

    return (
        <div className={styles['layout-header']}>
            <div className={styles.logo}>SSR Template</div>
            <div className={styles.menu}>
                <Link href='/about/info/baseinfo'>about</Link>
                <Link href='/team' style={{ marginLeft: 12 }}>team</Link>
                <Link href='/me' style={{ marginLeft: 12 }}>me</Link>
            </div>
            <div className={styles.user}>
                <Image width={32} height={32} src={userLogo} />
            </div>
        </div>
    );
};

export default LayoutHeader;