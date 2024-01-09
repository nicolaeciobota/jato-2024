'use client'
import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import IframeResizer from 'iframe-resizer-react';
import useClickOutside from "@/utils/useClickOutside";
import { useRouter } from "next/navigation";

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

    const { back } = useRouter();
    const ref = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const routeBackHandler = () => {
        back()
    }

    useClickOutside(ref, routeBackHandler);

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoading(false);
        }, 3 * 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="fixed h-screen w-full top-0 bottom-0 left-0 right-0 m-auto bg-slate-400 z-50">
            {
                loading && <div className={`animate-pulse absolute w-full ${shadowWidth ? `max-w-[${shadowWidth}px]` : ''} h-[100vh]`}>
                    <div className="w-full h-full bg-[#e8e7e8] dark:bg-subsectionBackground">
                    </div>
                </div>
            }
            <div className="cursor-pointer" ref={ref}>
                {
                    !loading
                        ? <svg
                            onClick={routeBackHandler}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 lg:w-10 lg:h-10 relative block ml-auto mr-2 mt-0 lg:mr-8 z-50">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        : null
                }

                <IframeResizer
                    heightCalculationMethod="lowestElement"
                    inPageLinks
                    log
                    src={iframeUrl}
                    scrolling={true}
                    style={{
                        minHeight: `${iframeHeight}vh`,
                        minWidth: '96%',
                        overflow: 'auto',
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: 'auto',
                        borderRadius: '12px',
                        ...iframeStyles
                    }}
                />
            </div>
        </div>
    );
}

export default IFrame;