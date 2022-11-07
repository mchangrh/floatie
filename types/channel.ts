import { VString } from "validated-types"

export type channelId = VString<["22", "startsWith,UC"]>

const channelIdRegex = new RegExp(/UC[A-Za-z0-9_-]{20}[AQgw]/)
export const validateChannelId = (channelId: string): channelId => {
    if (channelIdRegex.test(channelId)) {
        return channelId as unknown as channelId
    } else {
        throw new Error(`Invalid channelId: ${channelId}`)
    }
}
