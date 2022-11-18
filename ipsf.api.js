import express from "express";
const router = express.Router();
import upload from "./multer.helper.js";

import { postImage } from "./ipsf.controller.js";

router.post("/ipsf/img", upload.single("image"), postImage);

export default { router };
