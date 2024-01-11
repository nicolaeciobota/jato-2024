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
        <div className="relative xl:pl-8 lg:px-3">
            {/* <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className={`absolute left-[1px] xl:top-[0.5625rem] top-[0.30rem] hidden h-1.5 w-1.5 overflow-visible lg:block ${isSelected ? 'fill-primary stroke-primary' : 'fill-teal-400 stroke-teal-400'}`}>
                <path d="M3 0L6 3L3 6L0 3Z" stroke-width="2" stroke-linejoin="round"></path>
            </svg> */}
            <div className="relative">
                <div className={`font-mono lg:text-lg text-bas ${isSelected ? 'text-primary' : 'text-teal-400'}`}>
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
                    className={`mb-1 block xl:text-[26px] lg:text-xl text-base font-semibold tracking-tight w-max ${isSelected ? 'text-primary' : 'text-teal-400'}`}
                >
                    {formattedDate}
                </time>
                <div className={`h-[5px] w-full rounded ${isSelected ? 'bg-primary' : 'bg-transparent'}`}></div>
            </div>
        </div>
    );
};

export default DateTab;
