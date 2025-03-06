import Head from "next/head";
import "@/styles/globals.css";
import Layout from "./_layout";
import { Provider } from "react-redux";
import { store } from "@/store";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      <Head>
        <title>{"Blush and glow"}</title> 
        <meta name="description" content={ "Welcome to Blush and glow beauty bar"} />
      </Head>

      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />

            <ToastContainer
              position="bottom-right"
              autoClose={8000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </Layout>
        </Provider>
      )}
    </>
  );
}
