import { UpdateSupabaseViaApi } from "@/scripts/updateSupabaseViaApi";
import { NextResponse } from "next/server";

export const maxDuration = 15; // This function can run for a maximum of 15 seconds
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
