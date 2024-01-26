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

const handleFacelocation = (response) => {
  console.log("===============");
  console.log(response);

  console.log("====================");

  const image = document.getElementById("imageInput");
  const width = Number(image.height);
  const height = Number(image.width);

  const { bottom_row, left_col, right_col, top_row } = response;

  return {
    bottom: height - bottom_row * height,
    left: left_col * width,
    right: width - right_col * width,
    top: top_row * height,
  };
};

// const clarifAi = (ImageURL) => {
//   const PAT = "6611bac68a7242638d73075acff0f5a7";
//   // Specify the correct user_id/app_id pairings
//   // Since you're making inferences outside your app's scope
//   const USER_ID = "jackpot11";
//   const APP_ID = "smartBrainApplication";
//   // Change these to whatever model and image URL you want to use
//   const MODEL_ID = "face-detection";
//   const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";
//   const IMAGE_URL = ImageURL;

//   ///////////////////////////////////////////////////////////////////////////////////
//   // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
//   ///////////////////////////////////////////////////////////////////////////////////

//   const raw = JSON.stringify({
//     user_app_id: {
//       user_id: USER_ID,
//       app_id: APP_ID,
//     },
//     inputs: [
//       {
//         data: {
//           image: {
//             url: IMAGE_URL,
//           },
//         },
//       },
//     ],
//   });

//   const requestOptions = {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       Authorization: "Key " + PAT,
//     },
//     body: raw,
//   };

//   // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
//   // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
//   // this will default to the latest version_id
//   fetch(
//     "https://api.clarifai.com/v2/models/" +
//       MODEL_ID +
//       "/versions/" +
//       MODEL_VERSION_ID +
//       "/outputs",
//     requestOptions
//   )
//     .then((response) => response.json())
//     .then((result) => {
//       return faceSquarebracket(
//         handleFacelocation(
//           result.outputs[0].data.regions[0].region_info.bounding_box
//         )
//       );
//     })
//     .catch((error) => console.log("error", error));
// };

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      imageUrl: "",
      box: {},
    };
  }

  onChangeInput = (DataProvided) => {
    this.setState({
      imageUrl: DataProvided,
    });
  };

  displayBox = (box) => {
    console.log("***************");
    console.log(box);

    console.log("**************");
    this.setState({
      box: box,
    });
  };

  buttonOnSubmit = () => {
    const PAT = "6611bac68a7242638d73075acff0f5a7";
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = "jackpot11";
    const APP_ID = "smartBrainApplication";
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";
    const IMAGE_URL = this.state.imageUrl;

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

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

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id
    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        this.displayBox(
          handleFacelocation(
            result.outputs[0].data.regions[0].region_info.bounding_box
          )
        )
      )
      .catch((error) => console.log("error", error));
  };

  render() {
    const { onChangeInput } = this;
    // console.log(faceSquarebracket());

    return (
      <div style={{ height: "100%" }}>
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
            height: "100vh",
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

            <ImageLinkForm
              onChangeDataField={onChangeInput}
              onSubmit={this.buttonOnSubmit}
            />
            <br />
            <FacialRecognition imageFace={this.state.imageUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
