export interface adPlacementRenderer {
    config: {
        adPlacementConfig: {
            kind: "AD_PLACEMENT_KIND_MILLISECONDS" | "AD_PLACEMENT_KIND_END" | string
            adTimeOffset: {
                offsetStartMilliseconds: string, // integer as string
                offsetEndMilliseconds: string // integer as string
            },
            hideCueRangeMarker: boolean
        }
    },
    renderer: {
        adBreakServiceRenderer: {
            prefetchMilliseconds: string, // integer as string
            getAdBreakUrl: string
        }
    }
}