import ParticlesBg from "particles-bg";
import Naviagtion from "./components/Navigation/Naviagtion";
import Logo from "./components/Logo/Logo";
import FacialRecognition from "./components/FacialRecognition/FacialRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank.components";
import { Component } from "react";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////
// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id
const MODEL_ID = "face-detection";
const returnClariaiRequestOptions = (ImageUrl) => {
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const PAT = "377622cd3cee43f6bdc136374714bd30";
  const USER_ID = "jackpot11";
  const APP_ID = "smartBrainApplication";
  // Change these to whatever model and image URL you want to use

  const IMAGE_URL = `${ImageUrl}`;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  return {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };
};

fetch(
  "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
  returnClariaiRequestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

class App extends Component {
  constructor() {
    super();

    this.state = {
      imageUrl: "",
    };
  }
  onChangeInput = (DataProvided) => {
    console.log(DataProvided);
    this.setState({
      imageUrl: DataProvided,
    });
  };
  render() {
    const { onChangeInput } = this;

    return (
      <>
        <ParticlesBg
          color="#ff1111"
          num={200}
          type="lines"
          bg={true}
          style={{
            position: "fixed",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
          }}
        />
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

            <ImageLinkForm onChangeDataField={onChangeInput} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
