import ReactPlayer from "react-player";
import PageContainer from "../../components/PageContainer";
import { YoutubeIcon } from "../../svg";

const videos = [
  {
    raag: "Raag Kalavati",
    taal: "Drut Ek Taal",
    url: "https://www.youtube.com/watch?v=E1Nis6w0UEo",
  },
  {
    raag: "Raag Malkauns",
    taal: "Vilambit Roopak Taal & Drut Teen Taal",
    url: "https://www.youtube.com/watch?v=v-9rDppLPCw",
  },
  {
    raag: "Raag Jog",
    taal: "Drut Teen Taal",
    url: "https://www.youtube.com/watch?v=wNVGjQJm-8M",
  },
];

const Music = () => {
  return (
    <PageContainer>
      <div className="pt-52 pb-40 mx-10 lg:mx-60">
        <h1>Welcome to the music section of my page</h1>
        <p className="text-2xl my-10">
          I’m an aspiring hindustani classical vocalist. I have been training
          since the age of fourteen under the tutilate several prominient gurus.
          Currently I’m pursuing my Visharad from Gandharva Mahavidyalay. <br />
          <br />
          Here are some of my recent performances. Hope you like them!
        </p>
        <div className="w-full space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-40 lg:gap-y-32 lg:py-28">
          {videos.map((video, index) => (
            <div className="border border-black rounded" key={index}>
              <div className="h-60 lg:h-80">
                <ReactPlayer
                  url={video.url}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="m-3">
                <h2>{video.raag}</h2>
                <p>{video.taal}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          className="flex items-center space-x-5 font-semibold w-fit mt-20"
          href="https://www.youtube.com/channel/UCajB8s5rz2BLS2kBQUCpgNQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-20">
            <YoutubeIcon />
          </div>
          <p className="text-xl lg:text-3xl">Subscribe to my YouTube Channel</p>
        </a>
      </div>
    </PageContainer>
  );
};

export default Music;
