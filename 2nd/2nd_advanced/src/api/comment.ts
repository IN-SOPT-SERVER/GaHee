// src/api/user.ts
import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

const comment = {
    "postHour":new Date(2022,10,8)
}
router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message:"comment",
    data:comment
  });
});

module.exports = router;