import { object } from "./objects";
import Slides from "./slides";

export default function Windows() {
  return (
    <>
      <div className="window">Shopping Windows</div>
      {object.map((item, index) => (
        <Slides key={index} item={item} />
      ))}
    </>
  );
}
