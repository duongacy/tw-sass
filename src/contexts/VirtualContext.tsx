import { createContext } from 'react';

interface HotspotProps {
  type: 'custom' | 'info';
  pitch: number;
  yaw: number;
  argName: string;
}

export interface ImageProps {
  name: string;
  url: string;
  hotspots: HotspotProps[];
}

export type ImageContextProps = {
  images: ImageProps[];
  // eslint-disable-next-line no-unused-vars
  getImageByName: (name: string) => ImageProps | undefined;
};

const imageList: ImageProps[] = [
  {
    name: 'image-1',
    url: 'https://images.unsplash.com/photo-1596263576925-d90d63691097?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1322&q=80',
    hotspots: [
      {
        type: 'custom',
        pitch: 310,
        yaw: 15000,
        // tooltip={(hotSpotDiv, args) => {
        //   const imageDiv = document.createElement("img");
        //   imageDiv.setAttribute("width", "45");
        //   imageDiv.setAttribute("height", "45");
        //   imageDiv.setAttribute(
        //     "src",
        //     "https://img.icons8.com/ios/1600/circled-up-filled.png"
        //   );
        //   hotSpotDiv.appendChild(imageDiv);
        //   console.log(hotSpotDiv);
        // }}
        // handleClick={(evt, args) => hanldeClickImage(evt, args)}
        argName: 'image-2',
      },
    ],
  },
  {
    name: 'image-2',
    url: 'https://images.unsplash.com/photo-1594904578869-c011783103c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1285&q=80',
    hotspots: [
      {
        type: 'custom',
        pitch: 31,
        yaw: 150,
        // tooltip={(hotSpotDiv, args) => {
        //   const imageDiv = document.createElement("img");
        //   imageDiv.setAttribute("width", "45");
        //   imageDiv.setAttribute("height", "45");
        //   imageDiv.setAttribute(
        //     "src",
        //     "https://img.icons8.com/ios/1600/circled-up-filled.png"
        //   );
        //   hotSpotDiv.appendChild(imageDiv);
        //   console.log(hotSpotDiv);
        // }}
        // handleClick={(evt, args) => hanldeClickImage(evt, args)}
        argName: 'image-1',
      },
    ],
  },
];

export const ImageContext =
  createContext<ImageContextProps>({
    images: imageList,
    // eslint-disable-next-line no-unused-vars
    getImageByName: (name: string) => undefined,
  });
export const ImageProvider = ({ children }: any) => {
  const getImageByName = (name: string) => {
    return imageList.find((s) => s.name === name);
  };

  return (
    <ImageContext.Provider
      value={{ images: imageList, getImageByName }}
    >
      {children}
    </ImageContext.Provider>
  );
};
