import express, { Request, Response, Router } from "express";
require('dotenv').config();

const router:Router = express.Router();


router.get("/:movieId", (req: Request, res: Response) => {
    const{movieId} = req.params;
    return res.status(200).json({
      status: 200,
      message: "api 라우팅~ ",
      data: {
        _id: movieId,
        thumbnail: process.env.S3_URL,
        titleImage: process.env.S3_URL,
        videoUrl: process.env.S3_URL,
          title: "수리남",
          isOriginal: true,
          releaseDate: "2022-10-30",
          ageLimit: 15,
          episodeCount: 7,
          actors: ["하정우", "..."],
          genres: ["공포", "스릴러"],
          seriesFeatures: [],
          isLiked: true,
          isHave: true,
      },
      currentEpisode: {
        episodeNumber: 6,
        summary: "재밌다..1화",
        entireRunTime: 57,
        currentRunTime: 62,
      },
    });
});

  
module.exports= router;