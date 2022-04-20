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
  console.log(videos[0].url);
  return (
    <PageContainer>
      <div className="pt-80 pb-40 mx-60">
        <h1>Welcome to the music section of my page</h1>
        <p className="text-2xl my-10">
          I’m an aspiring hindustani classical vocalist. I have been training
          since the age of fourteen under the tutilate several prominient gurus.
          Currently I’m pursuing my Visharad from Gandharva Mahavidyalay. <br />
          <br />
          Here are some of my recent performances. Hope you like them!
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-20 py-28">
          {videos.map((video) => (
            <div className="w-fit border border-black rounded">
              <ReactPlayer url={video.url} controls />
              <div className="m-3">
                <h2>{video.raag}</h2>
                <p>{video.taal}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-5 font-semibold w-fit">
          <YoutubeIcon />
          <p className="text-3xl">Subscribe to my YouTube Channel</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default Music;
