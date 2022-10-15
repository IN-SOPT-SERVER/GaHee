
import express, { Request, Response, Router } from "express";


const router:Router =express.Router();


//첫번째 인자를 경로로 인식, 
//진입점이 api/index.ts

 router.use("/movie", require("./movie"));


router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "movie",
  });
});



module.exports = router; //위 생성한 route객체를 어디서든 사용할 수 있도록 모듈화 