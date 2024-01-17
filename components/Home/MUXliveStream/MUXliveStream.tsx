import { MuxLiveStreamRecord } from "@/graphql/generated";
import MUXplayer from "./MuxPlayer";

type Props = {
    muxLiveStreamRecord: MuxLiveStreamRecord;
};

const MUXliveStream = ({
    muxLiveStreamRecord
}: Props) => {

    const {
        muxPlayerUrl,
        iframeHeight,
        iframeUrl,
        iframeWidth,
        iframeMinHeight
    } = muxLiveStreamRecord;

    return (
        <section
            id="IVSplayer"
            className="bg-primary/[.03] pt-24 pb-10 dark:bg-dark-background opacity-95 min-h-[calc(100vh-320px)]"
        >
            <div className="container">
                <div className="flex lg:flex-row flex-col h-full">
                    <div className="lg:w-[66.66%] w-full">
                        <MUXplayer playerUrl={muxPlayerUrl}/>
                    </div>
                    <div className="lg:w-[33.33%] w-full lg:h-auto h-[565px]">
                        <iframe
                            src={iframeUrl}
                            height={`${iframeHeight}px`}
                            width={`${iframeWidth}px`}
                            style={{
                                width: `${iframeHeight}px`,
                                height: `${iframeWidth}px`,
                                minHeight: iframeMinHeight
                            }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MUXliveStream;