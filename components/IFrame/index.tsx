'use client'
import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import IframeResizer from 'iframe-resizer-react';

type Props = {
    iframeUrl?: string;
    iframeStyles?: CSSProperties;
    iframeHeight?: number;
    shadowWidth?: number;
}

const IFrame: FC<Props> = ({
    iframeUrl,
    iframeStyles,
    iframeHeight,
    shadowWidth,
}) => {

    const ref = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoading(false);
        }, 5 * 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            <div className="h-full">
                <div ref={ref} className={`fixed top-[10vh] bottom-0 left-0 z-0 w-full transition-transform transform ${true ? 'translate-y-0' : 'translate-y-full'}`}>
                    <div>
                        <div className={`relative w-full ${shadowWidth ? `max-w-[${shadowWidth}px]` : ''} ${iframeHeight === 80 ? 'h-[80vh]' : `h-[100vh]`} mx-auto`}>
                            {
                                loading && <div className={`animate-pulse absolute w-full ${shadowWidth ? `max-w-[${shadowWidth}px]` : ''} h-[100vh]`}>
                                    <div className="w-full h-full bg-[#e8e7e8] dark:bg-subsectionBackground">
                                    </div>
                                </div>
                            }
                            <IframeResizer
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IFrame;