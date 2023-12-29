'use client'
import { CSSProperties, FC, useEffect, useState } from "react";
import IframeResizer from 'iframe-resizer-react';

type Props = {
    iframeUrl?: string;
    iframeStyles?: CSSProperties;
    iframeHeight?: number;
    shadowWidth?: number;
}

const IFrame: FC<Props> = ({ iframeUrl, iframeStyles, iframeHeight, shadowWidth }) => {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoading(false);
        }, 4 * 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={`relative w-full ${shadowWidth ? `max-w-[${shadowWidth}px]` : ''} ${iframeHeight === 80 ? 'h-[80vh]' : 'h-[100vh]'} mx-auto`}>
            {
                loading && <div className={`animate-pulse absolute w-full ${shadowWidth ? `max-w-[${shadowWidth}px]` : ''} mb-10 h-[${iframeHeight}vh]`}>
                    <div className="w-full h-full bg-[#e8e7e8] dark:bg-subsectionBackground rounded-2xl">
                    </div>
                </div>
            }
            {iframeUrl
                ? <IframeResizer
                    heightCalculationMethod="lowestElement"
                    inPageLinks
                    log
                    src={iframeUrl}
                    scrolling={true}
                    style={{
                        minHeight: `${iframeHeight}vh`,
                        minWidth: '100%',
                        ...iframeStyles
                    }}
                />
                : null}
        </div>
    );
}

export default IFrame;