"use client";
import { useQuerySubscription } from "react-datocms/use-query-subscription";
import CategoryAwardsPage from "../CategoryAwardsPage";
import {
  AwardsQueryVariables,
  CategoryAwardQuery,
  CategoryAwardQueryVariables,
  SiteLocale,
} from "@/graphql/generated";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

export default function RealTimeAwardsPage({
  locale,
  initialData,
  token,
  query,
  page,
  variables,
}: {
  locale: SiteLocale;
  token: string;
  initialData: CategoryAwardQuery;
  query: TypedDocumentNode<CategoryAwardQuery, CategoryAwardQueryVariables>;
  page: number;
  variables: AwardsQueryVariables;
}) {
  const { data } = useQuerySubscription({
    query,
    variables,
    token,
    initialData,
    preview: true,
  });

  if (!data) return <></>;

  return <CategoryAwardsPage lng={locale} data={data} page={page} />;
}
