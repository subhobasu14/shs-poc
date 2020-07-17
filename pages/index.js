import React from "react";
import Head from "next/head";
import { createClient } from "contentful";

import Banner from "../components/banner";
import Header from "../components/header";
import Appliances from "../components/appliances";
import ApplianceList from "../components/applianceList";
import config from "../config.json";
import "../styles.scss";

// Instantiate the app client
const client = createClient({
  space: config.space,
  accessToken: config.accessToken,
});

async function fetchBanner() {
  return await client.getEntries({
    content_type: "tempBanner",
  });
}

async function fetchHeader() {
  return await client.getEntries({
    content_type: "header",
  });
}

async function fetchAppliances() {
  return await client.getEntries({
    content_type: "appliances",
  });
}

async function fetchApplianceList(slug) {
  const entries = await client.getEntries({
    content_type: "applianceList",
    "fields.title": slug,
  });

  return entries;
}

// Our Homepage component, will receive props from contentful entries thanks to getInitialProps function below.
function HomePage(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Welcome to NextJS + Contentful by ScreamZ</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/spectre.css/dist/spectre.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"
        />
      </Head>
      <div className="container col-lg mt-2">
        <div className="columns">
          {props.allBanners &&
            props.allBanners.map((banner) => (
              <Banner banner={banner} key={banner.fields.title} />
            ))}
        </div>
      </div>
      <div className="container col-lg mt-2">
        <div className="columns">
          {props.allHeaders &&
            props.allHeaders.map((header) => (
              <Header header={header} key={header.fields.title} />
            ))}
        </div>
      </div>
      <div className="container col-lg mt-2">
        <div className="columns">
          {props.allAppliances &&
            props.allAppliances.map((appliance) => (
              <Appliances appliance={appliance} key={appliance.fields.title} />
            ))}
        </div>
      </div>
      <div className="container col-lg mt-2">
        <div className="columns">
          {props.appList &&
            props.appList.map((apps) => (
              <ApplianceList apps={apps} key={apps.fields.title} />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
}

// This function will run during build time in case of static export.
// Or will run each time a new request is made to the browser in SSR.
// It's used to compute initial props for the component and pre-render.
HomePage.getInitialProps = async () => {
  // Get every entries in contentful from type Article, sorted by date.
  // article is the ID of the content model we created on the dashboard.
  // const entries = await client.getEntries({
  //   content_type: "tempBanner",
  //   // order: "-fields.date"
  // });
  const banners = await fetchBanner();
  const headers = await fetchHeader();
  const apppliances = await fetchAppliances();
  const appplianceList = await fetchApplianceList("list1");

  // Inject in props of our screen component
  return {
    allBanners: banners.items,
    allHeaders: headers.items,
    allAppliances: apppliances.items,
    appList: appplianceList.items,
  };
};

// That's the default export (the page)
export default HomePage;
