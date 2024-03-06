import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      <link href={asset("/main.css")} rel="stylesheet" />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'Inter';
            src: url(${asset("/fonts/Inter-Medium.ttf")}) format('ttf');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Inter';
            src: url(${asset("/fonts/Inter-SemiBold.woff")}) format('woff');
            font-weight: 600;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Inter';
            src: url(${asset("/fonts/Inter-Regular.woff")}) format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Sora';
            src: url(${asset("/fonts/Sora-Regular.woff2")}) format('woff2');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Sora';
            src: url(${asset("/fonts/Sora-Bold.woff2")}) format('woff2');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Sora';
            src: url(${asset("/fonts/Sora-ExtraBold.woff2")}) format('woff2');
            font-weight: 800;
            font-style: normal;
            font-display: swap;
          }
      `,
        }}
      />
    </Head>
  );
}

export default GlobalTags;
