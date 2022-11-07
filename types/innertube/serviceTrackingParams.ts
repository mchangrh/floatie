export interface serviceTrackingParam {
    service: string
    params: trackingParam[]
}

export interface trackingParam {
    // key/ value paris for tracking params
    key: string
    value: string
}
