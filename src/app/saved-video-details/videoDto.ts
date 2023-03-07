export interface videoDto {
    id: string,
    title: string,
    description: string,
    tags: string[],
    videoUrl: string,
    videoStatus: string,
    thumbnailUrl: string,
    likeCount: number,
    dislikeCount: number,
    viewCount: number
}