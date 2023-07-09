import {
  useState,
  useEffect,
  FunctionComponent,
  createRef,
} from 'react';
import { Pannellum } from 'pannellum-react';
import { useImage } from '@/hooks/useImage';
import { ImageProps } from '@/contexts/VirtualContext';
import { v4 } from 'uuid';

const VirtualImages: FunctionComponent = () => {
  const ref = createRef();

  const { getImageByName } = useImage();
  const [image, setImage] = useState<ImageProps>();
  useEffect(() => {
    const img = getImageByName('image-1');
    setImage(img);
  }, []);

  const hanldeClickImage = (evt: any, args: any) => {
    setImage(getImageByName(args.name));
  };

  // useEffect(() => {
  //   window.addEventListener("click", (evt) => {
  //     const loc = new Marizano.RectilinearView();
  //     console.log(evt.x, evt.y, evt.clientX, evt.clientY);
  //     console.log(loc.screenToCoordinates({ x: evt.x, y: evt.y }));
  //   });
  // }, []);

  return (
    <div className='image_main'>
      <div className='pannellum_div'>
        <Pannellum
          ref={ref}
          width='100%'
          height='100vh'
          image={image?.url}
          pitch={10}
          yaw={100}
          hfov={120}
          autoLoad
          author={''}
          orientationOnByDefault={false}
          hotspotDebug={false}
          title=''
        >
          {image?.hotspots?.map((hotspot) => (
            <Pannellum.Hotspot
              key={v4()}
              type='custom'
              pitch={hotspot.pitch}
              yaw={hotspot.yaw}
              tooltip={(hotSpotDiv: any) => {
                const imageDiv =
                  document.createElement('img');
                imageDiv.setAttribute('width', '45');
                imageDiv.setAttribute('height', '45');
                imageDiv.setAttribute(
                  'src',
                  'https://img.icons8.com/ios/1600/circled-up-filled.png'
                );
                hotSpotDiv.appendChild(imageDiv);
              }}
              handleClick={(evt: any, args: any) =>
                hanldeClickImage(evt, args)
              }
              handleClickArg={{ name: hotspot.argName }}
            />
          ))}
          {/* <Pannellum.Hotspot
            type="info"
            pitch={11}
            yaw={-167}
            text="Info Hotspot Text 3"
            URL="https://github.com/farminf"
          /> */}
        </Pannellum>
      </div>
    </div>
  );
};

export default VirtualImages;

// import React, {
//   Component,
//   useContext,
//   useEffect,
//   useState,
// } from 'react';
// import { Pannellum } from 'pannellum-react';
// import myImage from '../view360-1.jpeg';
// import myImage2 from '../view360-2.jpeg';
// import { ImageContext } from '../ImageContext';
// import Marizano from 'marzipano';
