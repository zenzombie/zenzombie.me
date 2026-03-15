import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware((context) => {
  const { starlightRoute } = context.locals;

  const overviewItem = starlightRoute.toc?.items[0];
  const pageOverviewLabel = starlightRoute.entry?.data?.overviewLabel;

  if (overviewItem) overviewItem.text = pageOverviewLabel ?? "Top";
});
