import Image from "next/image";
import Link from "next/link";
import '../app/globals.css';

export default function Home() {
  return (
    <>
      <div className="flex-container">
        <Image
          src="/sloth.png"
          alt="sloth.png"
          width={350}
          height={300}
          className=""
          loading="lazy"
        />
        <p>
          Worship & concludes with an open ending. It also symbolizes the Basin
          in the courtyard of the Old Testament sanctuary and the six Stone Jars
          at the wedding at Cana. (Exodus 30:18, John 2:1-12) In the Old
          Testament, priests had to come to the Basin to wash their hands and
          feet before entering the sanctuary, or else they risked death.
          <br />
          <br />
          The Basin symbolizes the need for purity. The six Stone Jars at the
          wedding at Cana were filled with water and turned into wine by Jesus
          words, leading the disciples to believe in him.
          <br />
          <br />
          Regarding the kingdom of God, it is said that by purifying oneself,
          one becomes a vessel of honor, suitable for the masters use. (2
          Timothy 2:20-21)
          <br />
          <br />
          Worship & aspires to be a joyful worship community dedicated to
          glorifying God and being used in service through faith in Jesus.
        </p>
      </div>

      <div className="button-container">
        <div className="button-box">
          <Link className="no-underline" href="/playlist">
            This Week&apos;s worship
          </Link>
        </div>
        <div className="button-box">
          <Link className="no-underline" href="/pool">
            Music Sheet Pool
          </Link>
        </div>
      </div>
    </>
  );
}
