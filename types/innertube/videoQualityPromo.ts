import { commandMetadata } from "./commandMetadata"

export interface videoQualityPromoRenderer {
    triggerCriteria: {
        connectionWhitelist: string[]
        joinLatencySeconds: number
        rebufferTimeSeconds: number
        watchTimeWindowSeconds: number
        refractorySeconds: number
    }
    text: {
        runs: [
            {
                text: string
            },
            {
                text: string
                bold: boolean
            }
        ]
    }
    endpoint: {
        clickTrackingParams: string
        commandMetadata: commandMetadata
        urlEndpoint: {
            url: string
            target: "TARGET_NEW_WINDOW" | string
        }
    }
    trackingParams: string
    snackbar: {
        notificationActionRenderer: {
            responseText: {
                runs: [
                    {
                        text: string
                    }
                ]
            }
            actionButton: {
                buttonRenderer: {
                    text: {
                        runs: [
                            {
                                text: string
                            }
                        ]
                    }
                    navigationEndpoint: {
                        clickTrackingParams: string
                        commandMetadata: commandMetadata
                        urlEndpoint: {
                            url: string
                            target: "TARGET_NEW_WINDOW" | string
                        }
                    }
                    trackingParams: string
                }
            }
            trackingParams: string
        }
    }
}
