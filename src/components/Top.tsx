import Card from "./Card";
import { Parallax } from "react-scroll-parallax";

export default function Top(): React.JSX.Element {
  return (
    <section className="top">
      <Parallax className="card-parallax" speed={80}>
        <Card />
      </Parallax>
    </section>
  );
}
