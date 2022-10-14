// src/api/user.ts
import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

const blog ={
    postname:'개휘post',
    writeDate:new Date(2022,10,8)
}
router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "블로그 get성공",
    data : blog
  });
});

module.exports = router;