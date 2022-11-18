import { create } from "ipfs-http-client";

const postImage = async (req, res) => {
  const projectId = process.env.IPSF_HTTP_CLIENT_PROJECT_ID;
  const projectSecret = process.env.IPSF_HTTP_CLIENT_API_KEY_SECRET;
  const auth =
    "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

  const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });

  client.add(req.file.buffer).then((res2) => {
    res.status(200).json({
      message: "image uploaded successfully",
      hash: res2.path,
    });
  });
};

export { postImage };
