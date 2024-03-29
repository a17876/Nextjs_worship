"use client";

interface ReferenceProps {
  address: string;
}
const Reference: React.FC<ReferenceProps> = ({ address }) => {
  const urlParams = new URLSearchParams(new URL(address).search);
  const videoId = urlParams.get("v");
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <div className="youtube-video">
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
        />
      </div>
    </>
  );
};

export default Reference;
