import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request) {
    const jwt = request.cookies.get('myTokenName')


    if (jwt === undefined) {
        console.log('entre1')
        return NextResponse.redirect(new URL('/Login', request.url))
    }
    try {

        const { payload } = await jwtVerify(
            jwt.value,
            new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET))
        console.log(payload)
        return NextResponse.next()


    } catch (error) {

        console.error(error)
        return NextResponse.redirect(new URL('/Login', request.url))
    }
}
export const config = {
    matcher: ['/Dashboard/:path*']
}