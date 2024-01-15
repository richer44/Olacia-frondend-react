// _app.tsx
import type { Metadata } from "next";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { Inter, Rubik, Manrope } from "next/font/google"; // Include your fonts if needed
import "../src/app/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar } from "@/app/collections/Navbar/Navbar";
import Sidebar from "@/app/collections/Sidebar/Sidebar";
import { Footer } from "@/app/collections/Footer/Footer";
import { ScrollToTopButton } from "@/app/components/Button/ScrollToTopButton/ScrollToTopButton";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Olaciao",
  description:
    "Olaciao is the best live chat software for website owners who want to get more out of their online interactions. It's simple to set up and comes with a host of features to help you boost your business online now!",
};

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <title>
          Olaciao Live Chatbot | Best Live Chat Software For Website
        </title>
        <meta name="description" content={metadata.description ?? ""} />
      </Head>
      <div
        className={`${rubik.variable} ${manrope.variable} ${inter.variable} font-inter`}
      >
        {router.route !== "/login" && (
          <>
            <Navbar /> <Sidebar />
          </>
        )}

        <div
          className={`${
            router.route !== "/login"
              ? "ml-[260px] p-6 bg-slate-50 h-[calc(100vh-85px)] overflow-y-scroll no-scrollbar"
              : "ml-[0px]"
          } `}
        >
          <>
            <Component {...pageProps} />
            {router.route !== "/login" && <Footer />}
            <ScrollToTopButton /> {/* Add the ScrollToTopButton component */}
            <ToastContainer />

          </>
        </div>
      </div>
    </>
  );
}

export default MyApp;
