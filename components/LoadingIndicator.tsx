"use client";
import { useEffect, useState } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Spinner from "./Spinner";

const LoadingIndicator = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
      NProgress.start();
    };
    const handleStop = () => {
      setLoading(false);
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleStop);
    Router.events.on("routeChangeError", handleStop);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleStop);
      Router.events.off("routeChangeError", handleStop);
    };
  }, []);

  return loading ? <Spinner /> : null;
};

export default LoadingIndicator;
