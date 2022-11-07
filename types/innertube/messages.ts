import { commandMetadata } from "./commandMetadata"

interface textRuns {
    runs: [
        {
            text: string
        }
    ]
}

interface impressionEndpoint {
    clickTrackingParams: string
    commandMetadata: commandMetadata
    feedbackEndpoint: {
        feedbackToken: string
        uiActions: {
            hideEnclosingContainer: boolean
        }
    }
}

interface button {
    buttonRenderer: {
        style: string
        size: string
        text: textRuns
        trackingParams: string
        command: {
            clickTrackingParams: string
            commandExecutorCommand: {
                commands: [
                    {
                        clickTrackingParams: string
                        commandMetadata: commandMetadata
                        browseEndpoint: {
                            browseId: string
                            params: string
                        }
                    },
                    {
                        commandMetadata: commandMetadata
                        feedbackEndpoint: {
                            feedbackToken: string
                            uiActions: {
                                hideEnclosingContainer: boolean
                            }
                        }
                    }
                ]
            }
        }
    }
}

export interface mealbarPromoRenderer {
    messageTexts: textRuns[]
    actionButton: button
    dismissButton: button
    triggerCondition: string
    style: string
    trackingParams: string
    impressionEndpoints: impressionEndpoint[]
    isVisible: boolean
    messageTitle: textRuns
}

export interface tooltipRenderer {
    promoConfig: {
        promoId: string
        impressionEndpoints: impressionEndpoint[]
        acceptCommand: impressionEndpoint
        dismissCommand: impressionEndpoint
    }
    targetId: string
    text: textRuns
    detailsText: textRuns
    dismissButton: button
    suggestedPosition: {
        type: string
    }
    dismissStrategy: {
        type: string
    }
    dwellTimeMs: string // string as integer
    trackingParams: string
    triggerCondition: string
}
