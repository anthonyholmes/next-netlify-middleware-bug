import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  console.log("middleware");

  return NextResponse.next({
    headers: {
      "xxx-header": "ooo la la",
    },
  });
}
