import { channelId } from "../channel"
import { thumbnail } from "./thumbnails"
import { videoId } from "../video"

export interface videoDetails {
    videoId: videoId
    title: string
    lengthSeconds: number
    keywords: string[]
    channelId: channelId
    isOwnerViewing: boolean
    shortDescription: string
    isCrawlable: boolean
    thumbnail: {
        thumbnails: thumbnail[]
    }
    allowRatings: true
    viewCount: string // integer as string
    author: string
    isPrivate: false
    isUnpluggedCorpus: false
    isLiveContent: boolean
}
