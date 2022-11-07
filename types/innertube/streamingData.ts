export interface streamingData {
    expiresInSeconds: string // integer as string
    formats: streamingFormat[]
    adaptiveFormats: streamingFormat[]
}

type qualityType = "hd720" | "hd1080" | "tiny" | "small" | "medium" | "large"
type qualityLabelType =
    | "144p"
    | "240p"
    | "360p"
    | "480p"
    | "720p"
    | "720p60"
    | "1080p60"
type audioQualityType = "AUDIO_QUALITY_LOW" | "AUDIO_QUALITY_MEDIUM"

interface partialFormat {
    itag: number
    url: string
    mimeType: string
    bitrate: number
    width: number
    height: number
    lastModified: string // unix timestamp (microseconds) as string
    quality: qualityType
    fps: number
    qualityLabel: qualityLabelType
    projectionType: "RECTANGULAR" | string
    approxDurationMs: string // integer as string
    colorInfo?: {
        primaries: "COLOR_PRIMARIES_BT709" | string
        transferCharacteristics: "COLOR_TRANSFER_CHARACTERISTICS_BT709" | string
        matrixCoefficients: "COLOR_MATRIX_COEFFICIENTS_BT709" | string
    }
    audioQuality?: audioQualityType
    audioSampleRate?: string // integer as string
    audioChannels?: number
    loudnessDb?: number
}

export interface streamingFormat extends partialFormat {}

export interface adaptiveStreamingFormat extends partialFormat {
    initRange: {
        start: string // integer as string
        end: string // integer as string
    }
    indexRange: {
        start: string // integer as string
        end: string // integer as string
    }
    averageBitrate: number
}
