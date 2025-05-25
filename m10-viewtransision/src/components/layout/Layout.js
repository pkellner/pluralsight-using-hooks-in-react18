import SpeakerNew from "../../../pages/speakernew";

// Layout does not use children but instead uses what comes from AppRouteProvider
export default function Layout() {
  return <SpeakerNew />;

  // const speakerId = parseInt(url.substring(9).replace("#", ""));
  //
  // return (
  //   <ThemeProvider>
  //     <Header />
  //     <AppMenu />
  //     {url === "/about" && <About />}
  //     {url === "/" && <Speakers />}
  //     {url.startsWith("/speaker/") && <Speaker id={speakerId} />}
  //     {url.startsWith("/speakerlist") && <SpeakerList />}
  //   </ThemeProvider>
  // );
}
