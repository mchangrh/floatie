import { thumbnail } from "./thumbnails"
import { videoId } from "../video"
import { commandMetadata } from "./commandMetadata"

export interface endscreenRenderer {
    elements: endscreenElementRenderer[]
    startMs: string // integer as string
    trackingParams: string
}

interface endscreenElementRenderer {
    style: "VIDEO" | string
    image: {
        thumbnails: thumbnail[]
    }
    left: number
    width: number
    top: number
    aspectRatio: number
    startMs: string // start time in ms as string
    endMs: string
    title: {
        accessibility: {
            accessibilityData: {
                label: string
            }
        }
        simpleText: string
    }
    metadata: {
        simpleText: string // x,xxx views
    }
    endpoint: {
        clickTrackingParams: string
        commandMetadata: commandMetadata
        watchEndpoint: {
            videoId: videoId
            watchEndpointSupportedOnesieConfig: {
                html5PlaybackOnesieConfig: {
                    commonConfig: {
                        url: string
                    }
                }
            }
        }
    }
    trackingParams: string
    id: string
    thumbnailOverlays: [
        {
            thumbnailOverlayTimeStatusRenderer: {
                text: {
                    accessibility: {
                        accessibilityData: {
                            label: string // xx minutes, xx seconds
                        }
                    }
                    simpleText: string // hh:mm:ss as string
                }
                style: "DEFAULT" | string
            }
        }
    ]
}
