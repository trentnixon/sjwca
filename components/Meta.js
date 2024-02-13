import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <title>Sydney Junior Winter Cricket Association</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;800;900&display=swap"
        rel="stylesheet"
      />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-0J9HMMYH4W"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-0J9HMMYH4W', { page_path: window.location.pathname });
                            `,
        }}
      />
    </Head>
  );
};
export default Meta;
