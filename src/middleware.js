import {NextResponse} from 'next/server'
import {jwtVerify} from 'jose'

export async function middleware(request){
    const jwt = request.cookies.get('myTokenName')

    if(request.nextUrl.pathname.includes('/Dashboard')){
        if(jwt === undefined){
            console.log('entre1')
            return NextResponse.redirect(new URL('/Login', request.url))
        }
        try {
            console.log('entre2')
            const {payload} = await jwtVerify(
                jwt,
                 new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET))
            console.log(payload)
            return NextResponse.next()

            
        } catch (error) {
            console.log('entre3')
            console.error(error)
            return NextResponse.redirect(new URL('/Login', request.url))
        }
    }

    return NextResponse.next()
}