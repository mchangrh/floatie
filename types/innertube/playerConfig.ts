import { channelId } from "../channel"
import { videoId } from "../video"
import { commandMetadata } from "./commandMetadata"

export interface subscribeEndpoint {
    channelIds: channelId[]
    params: string
}

export type playerActions =
    | "getSharePanelCommand"
    | "subscribeCommand"
    | "unsubscribeCommand"
    | "addToWatchLaterCommand"
    | "removeFromWatchLaterCommand"
    | "playlistEditEndpoint"
    | string

export interface playlistEditEndpoint {
    playlistId: string
}

export interface playlistAction {
    actions: [
        {
            addedVideoId?: videoId
            removedVideoId?: videoId
            action: "ACTION_ADD_VIDEO" | "ACTION_REMOVE_VIDEO_BY_VIDEO_ID"
        }
    ]
}

export interface webPlayerAction {
    clickTrackingParams: string
    commandMetadata: commandMetadata
    webPlayerShareEntityServiceEndpoint?: {
        serializedShareEntity: string
    }
    subscribeEndpoint?: subscribeEndpoint
    unsubscribeEndpoint?: subscribeEndpoint
}

export interface playerConfig {
    audioConfig: {
        loudnessDb: number
        perceptualLoudnessDb: number
        enablePerFormatLoudness: boolean
    }
    streamSelectionConfig: {
        maxBitrate: string // integer as string
    }
    mediaCommonConfig: {
        dynamicReadaheadConfig: {
            maxReadAheadMediaTimeMs: number
            minReadAheadMediaTimeMs: number
            readAheadGrowthRateMs: number
        }
    }
    webPlayerConfig: {
        useCobaltTvosDash: boolean
        webPlayerActionsPorting: Record<playerActions, webPlayerAction>
    }
}
