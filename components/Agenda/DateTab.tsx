import {
    SiteLocale,
    TalkRecord,
} from "@/graphql/generated";
import React from 'react';

type Props = {
    talk: TalkRecord;
    locale: SiteLocale;
};

const DateTab = ({ talk, locale }: Props) => {

    const {
        title,
        start,
        end,
    } = talk;

    const startDate = (new Date(start)).getMonth();
    const endDate = new Date(end).getMonth();

    return (
        <div className="relative lg:pl-8">
            <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-transparent stroke-slate-400"
            >
                <path
                    d="M3 0L6 3L3 6L0 3Z"
                    strokeWidth="2"
                    strokeLinejoin="round"
                ></path>
            </svg>
            <div className="relative">
                <div className="font-mono text-sm text-slate-500">
                    <button
                        className="ui-not-focus-visible:outline-none"
                        id="headlessui-tabs-tab-:R6kqlaqlla:"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        data-headlessui-state=""
                        aria-controls="headlessui-tabs-panel-:R5alaqlla:"
                    >
                        <span className="absolute inset-0"></span>{title}
                    </button>
                </div>
                <time
                    dateTime="2022-04-05"
                    className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                >
                    {startDate} - {endDate}
                </time>
            </div>
        </div>
    );
};

export default DateTab;
