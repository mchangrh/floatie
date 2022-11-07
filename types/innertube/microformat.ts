import { channelId } from "../channel"
import { thumbnail } from "./thumbnails"

export interface playerMicroformatRenderer {
    thumbnail: {
        thumbnails: thumbnail[]
    }
    embed: {
        iframeUrl: string
        flashUrl: string
        width: number
        height: number
        flashSecureUrl: string
    }
    title: {
        simpleText: string
    }
    description: {
        simpleText: string
    }
    lengthSeconds: string // integer as string
    ownerProfileUrl: string // canonical channel name link
    externalChannelId: channelId
    isFamilySafe: boolean
    availableCountries: string[] // ISO 3166-1 alpha-2 country codes
    isUnlisted: boolean
    hasYpcMetadata: false
    viewCount: string // integer as string
    category: string
    publishDate: string // YYYY-MM-DD
    ownerChannelName: string
    uploadDate: string // YYYY-MM-DD
}
