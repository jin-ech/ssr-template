import {
    NextResponse
} from "next/server";

import {
    NextRequest
} from "next/server";


// This function can be marked `async` if using `await` inside

export async function middleware(request: NextRequest) {
    console.log('in middleware1');
    const {
        pathname
    } = request.nextUrl;

    // // 比如我们对/api不做任何处理
    // if (!["/api"].some((prefix) => pathname.startsWith(prefix))) {
    //     return NextResponse.next();
    // }

    // 比如我们对 /demo 进行一下操作，如果没有权限的时候跳转到百度

    if (["/api"].some((prefix) => pathname.startsWith(prefix))) {
        return NextResponse.redirect("http://www.baidu.com");
    }
    return NextResponse.next();

}

export const config = {
    matcher: '/*',
  }