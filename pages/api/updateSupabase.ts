import { NextApiRequest, NextApiResponse } from "next";
import { UpdateSupabaseViaApi } from "@/scripts/updateSupabaseViaApi";

export default async function handler(
     req: NextApiRequest,
     res: NextApiResponse
) {
     if (req.method === "GET") {
          try {
               await UpdateSupabaseViaApi();
               return res.status(200).json({ message: "Update successful" });
          } catch (error) {
               console.error("Error running update script:", error);
               return res.status(500).json({ error: "Script failed" });
          }
     } else {
          return res
               .setHeader("Allow", ["GET"])
               .status(405)
               .end(`Method ${req.method} Not Allowed`);
     }
}
