import { ContentsCreateDTO } from './../interfaces/ContentsCreateDTO';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllContents = async() => {
    const data = await prisma.movie.findMany();
    return data;
}

const getOriginalSeries = async() => {
    const data = await prisma.movie.findMany({
        where: {
         isOriginal:{
            equals: true,
         },
    }
    });
    return data;
}


const createContents = async(contentsCreateDto:ContentsCreateDTO) => {
    const data = await prisma.movie.create({
        data:{   
            title : contentsCreateDto.title,
            isOriginal : contentsCreateDto.isOriginal,
            releasedDate : contentsCreateDto.releasedDate,
            ageLimit :contentsCreateDto.ageLimit,
            episodeCount : contentsCreateDto.episodeCount,
            actors :contentsCreateDto.actors,
            genres : contentsCreateDto.genres,
            isLiked  : contentsCreateDto.isLiked,
            isHave : contentsCreateDto.isHave
        }
    })
    return data;
}

const deleteContents = async(contentId : number) => {
  await  prisma.movie.delete({
        where:{
            id:contentId
        }
    });
}

//좋아요 없데이트 , 
const updateLike = async(contentId : number ) => {
    const pastLikeStatus = await prisma.movie.findUnique({
        where:{
            id:contentId
        }
    })
    const data = await prisma.movie.update({
        where:{
            id: contentId
        },
        data:{
            isLiked: !pastLikeStatus?.isLiked
        }
    });
    return data;
}


const contentsService = {
    getAllContents,
    getOriginalSeries,
    createContents,
    deleteContents,
    updateLike
}

export default contentsService;