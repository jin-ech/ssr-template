

import styles from './index.module.scss';

const LayoutMain = ({ children }) => {

    return (
        <div className={styles['layout-main']}>
            {children}
        </div>
    );
};

export default LayoutMain;