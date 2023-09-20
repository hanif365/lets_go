export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard/:path*", "/payment/:path*", "/bookticket/:path*" ]}