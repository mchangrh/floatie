import { thumbnail } from "./thumbnails"
import { navigationEndpoint } from "./navigationEndpoint"

export type statusString = "OK" | "LOGIN_REQUIRED" | string

export interface playabilityStatus {
    status: statusString
    messages?: string[]
    errorScreen?: {
        playerErrorMessageRenderer: {
            subreason: {
                simpleText: string
            }
            reason: {
                simpleText: string
            }
            proceedButton: {
                buttonRenderer: {
                    style: string
                    size: string
                    isDisabled: boolean
                    text: {
                        simpleText: string
                    }
                    navigationEndpoint: navigationEndpoint
                    trackingParams: string
                }
            }
            thumbnail: {
                thumbnails: thumbnail[]
            }
            icon: {
                iconType: "ERROR_OUTLINE" | string
            }
        }
    }
    playableInEmbed?: boolean
    miniplayer?: {
        miniplayerRenderer: {
            playbackMode: "PLAYBACK_MODE_ALLOW" | string
        }
    }
    contextParams: string
}
