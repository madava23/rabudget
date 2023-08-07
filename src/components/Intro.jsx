import { Form } from "react-router-dom";

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Raiso ny fifehezana ny <span className="accent">Volanao</span>
        </h1>
        <p>
          Ny tetibola manokana no tsiambaratelon'ny fahalalahana ara-bola.
          Atombohy anio ny dianao.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="Iza ny anaranao?"
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <button type="submit" className="btn btn--dark">
            <span>Hamorona kaonty</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
};
export default Intro;
