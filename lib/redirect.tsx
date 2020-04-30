import Router from "next/router";
import { NextPageContext } from "next";

export default (context: NextPageContext, target: string) => {
  if (context.res) {
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    Router.replace(target);
  }
};
