'use client'
import VideoJS from "./VideoJs";
import videojs from 'video.js';
import { useCallback, useRef } from "react";
import {
    registerIVSQualityPlugin,
} from 'amazon-ivs-player';

type Props = {
    playbackURL: string
}

const IVSplayer = ({ playbackURL }: Props) => {

    const playerRef = useRef<any>(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        playinline: true,
        fluid: true,
        sources: [{
            src: playbackURL
        }]
    };

    const handlePlayerReady = useCallback((player: any) => {
        playerRef.current = player;
        registerIVSQualityPlugin(videojs);
        player.enableIVSQualityPlugin();
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    }, [playerRef]);

    return (
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    );
};

export default IVSplayer;
