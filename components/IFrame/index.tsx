'use client'
import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from "react";
import IframeResizer from 'iframe-resizer-react';
import useClickOutside from "@/utils/useClickOutside";

type Props = {
    iframeUrl?: string;
    iframeStyles?: CSSProperties;
    iframeHeight?: number;
    shadowWidth?: number;
    button?: ReactNode | null;
    defaultOpen?: boolean;
}

const IFrame: FC<Props> = ({
    iframeUrl,
    iframeStyles,
    iframeHeight,
    shadowWidth,
    button = null,
    defaultOpen = false
}) => {

    const ref = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    useClickOutside(ref, () => {
        if (isOpen) {
            setIsOpen(false);
        }
    });

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoading(false);
        }, 3 * 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            <div className="h-full">
                {!isOpen
                    ? <button
                        type="button"
                        onClick={toggleDrawer}
                        className="hover:bg-primary/90 focus:shadow-outline sm:mr-6 inline-flex h-12 items-center justify-center rounded bg-primary px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none"
                    >
                        {
                            button
                                ? button
                                : null
                        }
                    </button>
                    : null}

                <div ref={ref} className={`fixed bottom-0 left-0 z-40 w-full p-4 transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                    <div className="bg-white p-4">
                        <div className={`relative w-full ${shadowWidth ? `max-w-[${shadowWidth}px]` : ''} ${iframeHeight === 80 ? 'h-[80vh]' : 'h-[100vh]'} mx-auto`}>
                            {
                                loading && <div className={`animate-pulse absolute w-full ${shadowWidth ? `max-w-[${shadowWidth}px]` : ''} mb-10 h-[${iframeHeight}vh]`}>
                                    <div className="w-full h-full bg-[#e8e7e8] dark:bg-subsectionBackground rounded-2xl">
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
                    {isOpen
                        ? <button
                            onClick={toggleDrawer}
                            className="block rounded-lg md:px-3 px-1 py-[6px] ring-primary focus:ring-2 absolute top-[-28px] end-3.5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        : null}
                </div>
            </div>
        </div>
    );
}

export default IFrame;