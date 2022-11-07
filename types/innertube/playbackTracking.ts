export interface playbackTracking {
    videostatsPlaybackUrl: {
        baseUrl: string
    }
    videostatsDelayplayUrl: {
        baseUrl: string
    }
    videostatsWatchtimeUrl: {
        baseUrl: string
    }
    ptrackingUrl: {
        baseUrl: string
    }
    qoeUrl: {
        baseUrl: string
    }
    atrUrl: {
        baseUrl: string
        elapsedMediaTimeSeconds: number
    }
    videostatsScheduledFlushWalltimeSeconds: number[]
    videostatsDefaultFlushIntervalSeconds: number
}
