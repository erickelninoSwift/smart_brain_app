import ParticlesBg from "particles-bg";
import Naviagtion from "./components/Navigation/Naviagtion";
import Logo from "./components/Logo/Logo";
import FacialRecognition from "./components/FacialRecognition/FacialRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank.components";
function App() {
  return (
    <>
      <div>
        <Naviagtion />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Rank />
          <ImageLinkForm />
        </div>
      </div>
    </>
  );
}

export default App;
