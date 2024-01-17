'use client';
import MuxPlayer from '@mux/mux-player-react';

interface Props {
    playbackId: string;
    placeholderUrl: string;
    streamType: 'on-demand' | 'live' | 'll-live' | any;
}

const MUXplayer = ({ playbackId, placeholderUrl, streamType }: Props) => {

    return (
        <MuxPlayer
            playbackId={playbackId}
            placeholder={placeholderUrl}
            streamType={streamType}
        />
    );
}
export default MUXplayer;