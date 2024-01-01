'use client'
import { AgendaTabQuery, SiteLocale, TalkRecord } from "@/graphql/generated";
import SingleTalk from "../Agenda/SingleTalk";
import DateTab from "../Agenda/DateTab";
import Link from "next/link";
import { useMemo, useState } from "react";
import PageIndicatorList from "./PageIndicatorList";
import { notFound } from "next/navigation";

type Props = {
    data: AgendaTabQuery;
    lng: SiteLocale;
    page: number;
};

type Tab = {
    title: string;
    date: any;
}

const AgendaTabPage = ({ data, lng, page }: Props) => {


    if (!data.allAgendaTabs.length) {
        notFound();
    }

    const [selectedTab, setSelectedTab] = useState<Tab>({ title: data?.allAgendaTabs[0].title, date: data?.allAgendaTabs[0].date });

    const titleDate = data.allAgendaTabs.map((tab) => ({ title: tab?.title, date: tab?.date }))


    const talks = useMemo(() => {
        if (selectedTab?.date && selectedTab?.title) {
            const filteredTab = data.allAgendaTabs.filter((tab) => tab?.title === selectedTab?.title && tab?.date === selectedTab?.date)[0];
            return filteredTab?._allReferencingTalks || [];
        }
        return data?.allAgendaTabs[0]._allReferencingTalks;
    }, [selectedTab, data])

    return (
        <section className="mt-4 pb-[120px] pt-[120px] dark:bg-dark-background">
            <div className="container ">
                <div className="flex xl:justify-between justify-center xl:flex-row flex-col">
                    <div className="-mx-4 flex h-auto xl:flex-col flex-row xl:justify-start items-start justify-center xl:w-1/5 w-full relative">
                        <div className="relative xl:block flex xl:w-auto w-full">
                            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 xl:block"></div>
                            {titleDate.map((tab, index) => <div onClick={() => setSelectedTab(tab)} key={index}>
                                <DateTab tab={tab} locale={lng} isSelected={(tab.title === selectedTab.title && tab.date === selectedTab.date)} />
                            </div>)}
                        </div>
                    </div>
                    <div className="-mx-4 flex h-full flex-wrap xl:w-4/5 w-full justify-center">
                        {talks.map((talk) => {
                            return (
                                <div
                                    key={talk.id}
                                    className="w-full mb-10 px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 xl:mb-0"
                                >
                                    <SingleTalk talk={talk as TalkRecord} locale={lng} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className=" -mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <ul className="flex items-center justify-center pt-8">
                            <li className="mx-1">
                                <Link
                                    href={
                                        page - 1 === 1
                                            ? `/${lng}/agenda-tab`
                                            : `/${lng}/agenda-tab/page/${page - 1}`
                                    }
                                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                >
                                    Prev
                                </Link>
                            </li>
                            <PageIndicatorList
                                lng={lng}
                                agendaTabCount={data["_allAgendaTabsMeta"]?.count}
                            />
                            {page * 9 <= data["_allAgendaTabsMeta"]?.count && (
                                <li className="mx-1">
                                    <Link
                                        href={`/${lng}/awards/page/${page + 1}`}
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    >
                                        Next
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgendaTabPage;
