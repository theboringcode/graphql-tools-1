import React from "react";
import { withApollo } from "./withApollo";
import { NextPage } from "next";
import isSignedIn from "./isSignedIn";
import redirect from "./redirect";

export function withAuth<T>(Page: NextPage<T>) {
  const AuthPage = (props: T) => <Page {...props} />;
  AuthPage.getInitialProps = async (context: any) => {
    const { me } = await isSignedIn(context.apolloClient);
    if (!me || !me.id) {
      redirect(context, "/signin");
    }
    return { me };
  };
  return withApollo(AuthPage as any);
}
