import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
 
const defaults = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 80,
  animate: true,
  height:50
};
 
const Icon = () => (
  <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
);
 
export default Icon;