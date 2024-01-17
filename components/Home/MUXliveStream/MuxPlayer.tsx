'use client';
import MuxPlayer from '@mux/mux-player-react';

interface Props {
    playerUrl: string;
}

const MUXplayer = ({ playerUrl }: Props) => {

    return (
        <MuxPlayer
            playbackId={playerUrl}
            metadata={{
                video_id: 'video-id-123456',
                video_title: 'Bick Buck Bunny',
                viewer_user_id: 'user-id-bc-789',
            }}
            streamType="on-demand"
        />
    );
}
export default MUXplayer;