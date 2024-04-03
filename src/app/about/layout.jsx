import Link from "next/link";
import { Suspense } from "react";

import Demo from "../../components/demo";
import { Button } from "antd";

// export const getData = async () => {
//     const res = await fetch('http://localhost:3000/api', {
//         cache: 'no-cache',
//         method: 'post',
//         body: JSON.stringify({ cc: 'cc', dd: 'dd' })
//     });
//     return res.json();
// };

export default ({ children }) => {
    // const { data } = await getData();

    return (
        <div>
            <Link href='/about/info/baseinfo'>baseinfo</Link>
            <Link href='/about/info/concat' style={{ marginLeft: 12 }}>concat</Link>

            <Suspense fallback={<div>loading</div>}>
                <div>{children}</div>
            </Suspense>
            {/* <Suspense fallback={<span style={{ margin: '0 12px' }}>loading</span>}>
                <Demo />
            </Suspense>
            <Suspense fallback={<span style={{ margin: '0 12px' }}>loading</span>}>
                <Demo />
            </Suspense>
            <Suspense fallback={<span style={{ margin: '0 12px' }}>loading</span>}>
                <Demo />
            </Suspense> */}
        </div>
    );
};