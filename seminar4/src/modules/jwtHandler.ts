// src/modules/jwtHandler.ts
import jwt from "jsonwebtoken";
import { tokenType } from "../constants";

//* 받아온 userId를 담는 access token 생성
// 유저 아이디를 받고 payload에 담는다 -> 개미의 가슴에 해당하는 부분 
const sign = (userId: number) => {
  const payload = {
    userId,
  };

  //담은 userId를 토큰으로 만들어 준다
  //jwt.sign 매서드를 통해서 토큰으로 만들어 준다
  // (어떤 데이터, 어떤 시크릿키 , 옵션<유효기간 , "2h" : 두시간>  )
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "2h" });
  return accessToken;
};



//* token 검사!
//클라이언트가 보내준 토큰이, 우리가 발행한 토큰이 맞는지를 확인 
const verify = (token: string) => {
  let decoded: string | jwt.JwtPayload;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (error: any) {
    if (error.message === "jwt expired") {
      return tokenType.TOKEN_EXPIRED;
    } else if (error.message === "invalid token") {
      return tokenType.TOKEN_INVALID;
    } else {
      return tokenType.TOKEN_INVALID;
    }
  }

  return decoded;
};

export default {
  sign,
  verify,
};