export interface PostInterface {
    posterPhotoUrl: string, // 貼文者頭像
    posterName: string, // 貼文者名稱
    content: string, // 貼文內文
    timePassed: string, // 貼文經過時間
    postImgUrl: string, // 貼文圖片
    likeQty: number, // like 數量
}

export interface PostResponse {
    data: PostInterface;
}