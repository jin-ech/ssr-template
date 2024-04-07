import Link from "next/link";
import { Suspense } from "react";

// export const getData = async () => {
//     const res = await fetch('http://localhost:3000/api', {
//         cache: 'no-cache',
//         method: 'post',
//         body: JSON.stringify({ cc: 'cc', dd: 'dd' })
//     });
//     return res.json();
// };

const Layout = ({ children, team1, team2 }) => {
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

export default Layout;