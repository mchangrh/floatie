interface captionTrack {
    baseUrl: string
    name: {
        simpleText: string
    }
    vssId: string
    languageCode: string
    kind: string
    isTranslatable: boolean
}

interface translationLanguage {
    languageCode: string
    languageName: {
        simpleText: string
    }
}

interface audioTrack {
    captionTrackIndices: number[]
}

export interface captions {
    playerCaptionsTracklistRenderer: {
        captionTracks: captionTrack[]
        audioTracks: audioTrack[]
        translationLanguages: translationLanguage[]
        defaultAudioTrackIndex: number
    }
}
