import { VString } from "validated-types"

export type videoId = VString<["11"]>

const videoIdRegex = new RegExp(/[A-Za-z0-9_-]{10}[AEIMQUYcgkosw048]/)
export const validateVideoId = (videoId: string): videoId => {
    if (videoIdRegex.test(videoId)) {
        return videoId as unknown as videoId
    } else {
        throw new Error(`Invalid videoId: ${videoId}`)
    }
}
