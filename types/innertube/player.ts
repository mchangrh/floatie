import { videoDetails } from "./videoDetails"
import { serviceTrackingParam } from "./serviceTrackingParams"
import { playabilityStatus } from "./playabilityStatus"
import { streamingData } from "./streamingData"
import { playbackTracking } from "./playbackTracking"
import { captions } from "./captions"
import { playerConfig } from "./playerConfig"
import { playerMicroformatRenderer } from "./microformat"
import { cardCollectionRenderer } from "./cards"
import { videoQualityPromoRenderer } from "./videoQualityPromo"
import { mealbarPromoRenderer, tooltipRenderer } from "./messages"
import { entityBatchUpdate } from "./frameworkUpdates"
import { endscreenRenderer } from "./endscreen"
import { adPlacementRenderer } from "./adPlacement"

export interface player {
    responseContext: {
        visitorData: string
        serviceTrackingParams: serviceTrackingParam[]
        mainAppResponseContext: Record<string, boolean>
        webResponseContextExtensionData: Record<string, boolean>
    }
    playabilityStatus: playabilityStatus
    streamingData: streamingData
    playerAds: [
        {
            playerLegacyDesktopWatchAdsRenderer: {
                playerAdParams: {
                    showContentThumbnail: boolean
                    enabledEngageTypes: string // array of integers as string
                }
                gutParams: {
                    tag: string
                }
                showCompanion: boolean
                showInstream: boolean
                useGut: boolean
            }
        }
    ]
    playbackTracking: playbackTracking
    captions: captions
    videoDetails: videoDetails
    playerConfig: playerConfig
    storyboards: {
        playerStoryboardSpecRenderer: {
            spec: string // url
        }
    }
    microformat: {
        playerMicroformatRenderer: playerMicroformatRenderer
    }
    cards: {
        cardCollectionRenderer: cardCollectionRenderer
    }
    trackingParams: string
    attestation: {
        playerAttestationRenderer: {
            challenge: string
            botGuardData: {
                program: string
            }
        }
    }
    videoQualityPromoSupportedRenderers: {
        videoQualityPromoRenderer: videoQualityPromoRenderer
    }
    messages: [
        {
            mealbarPromoRenderer: mealbarPromoRenderer
            tooltipRenderer: tooltipRenderer
        }
    ]
    endscreen: {
        endscreenRenderer: endscreenRenderer
    }
    adPlacements: {
        adPlacementRenderer: adPlacementRenderer
    }[]
    frameworkUpdates: {
        entityBatchUpdate: entityBatchUpdate
    }
}
