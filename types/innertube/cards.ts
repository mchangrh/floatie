import { thumbnail } from "./thumbnails"
import { videoId } from "../video"
import { commandMetadata } from "./commandMetadata"

interface collaboratorCard {
    collaboratorInfoCardContentRenderer: {
        channelAvatar: {
            thumbnails: thumbnail[]
        }
        customText: {
            simpleText: string
        }
        channelName: {
            simpleText: string
        }
        subscriberCountText: {
            simpleText: string // "x.x{SI} subscribers"
        }
        endpoint: {
            clickTrackingParams: string
            commandMetadata: commandMetadata
            browseEndpoint: {
                browseId: string
            }
        }
        trackingParams: string
    }
}

interface videoInfoCard {
    videoInfoCardContentRenderer: {
        videoThumbnail: {
            thumbnails: thumbnail[]
        }
        lengthString: {
            accessibility: {
                accessibilityData: {
                    label: string // duration in string
                }
            }
            simpleText: string // duration as hh:mm:ss
        }
        videoTitle: {
            simpleText: string
        }
        channelName: {
            simpleText: string // by {channelName}
        }
        viewCountText: {
            simpleText: string // "x,xxx views"
        }
        action: {
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
    }
}

interface cardsRenderer {
    teaser: {
        simpleCardTeaserRenderer: {
            message: {
                simpleText: string
            }
            trackingParams: string
            prominent: boolean
            logVisibilityUpdates: boolean
        }
    }
    content: collaboratorCard | videoInfoCard
    cueRanges: [
        {
            startCardActiveMs: string // integer as string
            endCardActiveMs: string // integer as string
            teaserDurationMs: string // integer as string
            iconAfterTeaserMs: string // integer as string
        }
    ]
    icon: {
        infoCardIconRenderer: {
            trackingParams: string
        }
    }
    trackingParams: string
    cardId: string
    feature: "cards" | string
}

export interface cardCollectionRenderer {
    cards: cardsRenderer[]
    headerText: {
        simpleText: string // From {channelName}
    }
    icon: {
        infoCardIconRenderer: {
            trackingParams: string
        }
    }
    closeButton: {
        infoCardIconRenderer: {
            trackingParams: string
        }
    }
    trackingParams: string
    allowTeaserDismiss: boolean
    logIconVisibilityUpdates: boolean
}
