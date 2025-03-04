import { withClerkMiddleware } from "@clerk/nextjs"
import { NextResponse } from "next/server"

export default withClerkMiddleware(req => {
  return NextResponse.next()
})

export const config = {
  matcher: ["/docs/:path*"]
}
