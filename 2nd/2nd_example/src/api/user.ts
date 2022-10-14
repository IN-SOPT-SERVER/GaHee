// src/api/user.ts

import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!


const router: Router = express.Router();

//~localhost/api/user
router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "유저 조회 성공",
  });
});

module.exports = router; //위 생성한 route객체를 어디서든 사용할 수 있도록 모듈화 