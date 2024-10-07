import { UpdateSupabaseViaApi } from "@/scripts/updateSupabaseViaApi";
import { NextResponse } from "next/server";

export const maxDuration = 60; // 60 seconds
export const dynamic = "force-dynamic";

export async function GET() {
     try {
          await UpdateSupabaseViaApi();
          return NextResponse.json(
               { message: "Update successful" },
               { status: 200 }
          );
     } catch (error) {
          console.error("Error running update script:", error);
          return NextResponse.json({ error: "Script failed" }, { status: 500 });
     }
}
