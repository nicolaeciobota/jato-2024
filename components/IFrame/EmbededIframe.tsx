'use client'
import { CSSProperties, FC, useState } from "react";
import IframeResizer from 'iframe-resizer-react';

type Props = {
    iframeUrl?: string;
    iframeStyles?: CSSProperties;
    iframeHeight?: number;
    shadowWidth?: number;
}

const EmbededIframe: FC<Props> = ({ iframeUrl, iframeStyles, iframeHeight, shadowWidth }) => {

    const [loading, setLoading] = useState<boolean>(true);

    const handleIframeLoad = () => {
        setLoading(false);
    };

    return (
        <div className={`relative w-full ${shadowWidth ? `max-w-[${shadowWidth}px]` : ''} ${iframeHeight === 80 ? 'h-[80vh]' : 'h-[100vh]'} mx-auto`}>
            {
                loading
                    ? <div className={`animate-pulse absolute top-0 w-full h-[${iframeHeight}vh] z-10`}>
                        <div className={`bg-[#e8e7e8] h-full`}>
                            <div className="m-auto w-full h-full flex justify-center items-center">
                                <p className={`inline mx-auto text-black text-[20px]`}>
                                    Loading comments ...
                                </p>
                            </div>
                        </div>
                    </div>
                    : null
            }
            {iframeUrl
                ? <IframeResizer
                    heightCalculationMethod="lowestElement"
                    inPageLinks
                    src={iframeUrl}
                    scrolling={true}
                    onLoad={handleIframeLoad}
                    style={{
                        minHeight: `${iframeHeight}vh`,
                        minWidth: '100%',
                        position: 'absolute',
                        top: '0',
                        ...iframeStyles
                    }}
                />
                : null}
        </div>
    );
}

export default EmbededIframe;