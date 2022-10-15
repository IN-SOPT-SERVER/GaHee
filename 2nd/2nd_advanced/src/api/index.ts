import express, { Request, Response, Router } from "express";

const router:Router = express.Router();


router.use("/blog", require("./blog"))
router.use("/comment", require("./comment"))
router.use("/member", require("./member"))
router.use("/movie", require("./movie"))
router.use("/user", require("./user"))


router.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
      status: 200,
      message: "api 라우팅~ ",
      });
  });
  
module.exports= router;