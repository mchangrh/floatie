import { commandMetadata } from "./commandMetadata"

export interface navigationEndpoint {
    clickTrackingParams: string
    commandMetadata: commandMetadata
    signInEndpoint: {
        nextEndpoint: {
            clickTrackingParams: string
            urlEndpoint: {
                url: string
            }
        }
    }
}
