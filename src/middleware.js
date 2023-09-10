import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { parse } from 'url';


export async function middleware(request) {
    const jwt = request.cookies.get('myTokenName');
  
    if (jwt === undefined) {
      return NextResponse.redirect(new URL('/Login', request.url));
    }
  
    try {
      const { payload } = await jwtVerify(
        jwt.value,
        new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET)
      );
  
      // Agrega esta línea:
      const { pathname } = parse(request.url);
      if (pathname === '/api/facturas/factura') {
        request.headers.set('Cache-Control', 'no-cache');
      }
  
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL('/Login', request.url));
    }
  }
  
  export const config = {
    matcher: ['/Dashboard/:path*'],
  };
  