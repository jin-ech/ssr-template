import {
    NextResponse
} from "next/server";

export async function GET(req) {
    const params = new URL(req.url);
    const searchParams = params.searchParams;
    const obj = Object.fromEntries(searchParams);
    return NextResponse.json(obj);
}
export async function POST(req) {
    const res = await req.json();
    await new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 0);
    });
    return Response.json({
        data: res
    });
}