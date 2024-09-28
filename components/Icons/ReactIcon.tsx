import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ReactIcon = React.memo(function Icon(props: SvgProps) {
  return (
    <Svg width={112} height={102} fill='none' {...props}>
      <Path
        fill='#61dafb'
        d='M56 61.832c5.891 0 10.667-4.776 10.667-10.667S61.89 40.498 56 40.498s-10.666 4.776-10.666 10.667S50.108 61.832 56 61.832Z'
      />
      <Path
        stroke='#61dafb'
        strokeWidth={5.333}
        d='M56 75.165c29.455 0 53.333-10.745 53.333-24s-23.878-24-53.333-24-53.334 10.745-53.334 24 23.879 24 53.334 24Z'
      />
      <Path
        stroke='#61dafb'
        strokeWidth={5.333}
        d='M35.215 63.165c14.728 25.509 35.972 40.815 47.451 34.188 11.48-6.628 8.846-32.68-5.882-58.188-14.727-25.51-35.972-40.816-47.45-34.188-11.48 6.627-8.846 32.679 5.881 58.188Z'
      />
      <Path
        stroke='#61dafb'
        strokeWidth={5.333}
        d='M35.215 39.165c-14.727 25.509-17.36 51.56-5.882 58.188 11.48 6.627 32.724-8.68 47.451-34.188 14.728-25.51 17.362-51.56 5.883-58.188-11.48-6.628-32.724 8.679-47.452 34.188Z'
      />
    </Svg>
  );
});
export default ReactIcon;
