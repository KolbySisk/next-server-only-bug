import type { NextApiRequest, NextApiResponse } from "next";
import { serverStuff } from "../../utils/server-util";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  serverStuff();
  res.status(200).json({ name: "John Doe" });
}
