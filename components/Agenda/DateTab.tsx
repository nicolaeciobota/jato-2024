import {
    SiteLocale,
} from "@/graphql/generated";
import React from 'react';

type Props = {
    tab: any
    locale: SiteLocale;
    isSelected: boolean
};

const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const DateTab = ({ tab, isSelected }: Props) => {

    const {
        title,
        date
    } = tab;

    const formattedDate = `${MONTHS[(new Date(date)).getMonth()]} ${(new Date(date)).getDate()}`;

    return (
        <div className="relative xl:pl-8 px-3">
            <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className={`absolute left-[1px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block ${isSelected ? 'fill-blue-600 stroke-blue-600' : 'fill-transparent stroke-slate-400'}`}>
                <path d="M3 0L6 3L3 6L0 3Z" stroke-width="2" stroke-linejoin="round"></path>
            </svg>
            <div className="relative">
                <div className={`font-mono lg:text-sm text-xs ${isSelected ? 'text-[#2563eb]' : 'text-slate-500'}`}>
                    <button
                        className="ui-not-focus-visible:outline-none"
                        id="headlessui-tabs-tab-:R6kqlaqlla:"
                        role="tab"
                        type="button"
                    >
                        <span className="absolute inset-0"></span>{title}
                    </button>
                </div>
                <time
                    dateTime="2022-04-05"
                    className="mb-3 block xl:text-2xl lg:text-lg text-sm font-semibold tracking-tight text-blue-900 xl:w-auto lg:w-[120px] w-[88px]"
                >
                    {formattedDate}
                </time>
            </div>
        </div>
    );
};

export default DateTab;
