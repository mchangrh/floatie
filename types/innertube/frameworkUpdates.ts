export interface entityBatchUpdate {
    mutations: [
        {
            entityKey: string
            type: string
            payload: {
                offlineabilityEntity: {
                    key: string
                    addToOfflineButtonState:
                        | "ADD_TO_OFFLINE_BUTTON_STATE_UNKNOWN"
                        | string
                }
            }
        }
    ]
    timestamp: {
        seconds: string // integer as string
        nanos: number
    }
}
