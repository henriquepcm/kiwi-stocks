import { NextApiRequest, NextApiResponse } from "next";
import { UpdateSupabaseViaApi } from "../../scripts/updateSupabaseViaApi"; // Adjust the path if necessary

export default async function handler(
     req: NextApiRequest,
     res: NextApiResponse
) {
     if (req.method === "GET") {
          try {
               await UpdateSupabaseViaApi();
               res.status(200).json({ message: "Data updated successfully." });
          } catch (error) {
               console.error("Error updating data:", error);
               res.status(500).json({ error: "Failed to update data." });
          }
     } else {
          res.setHeader("Allow", ["GET", "POST"]);
          res.status(405).end(`Method ${req.method} Not Allowed`);
     }
}
