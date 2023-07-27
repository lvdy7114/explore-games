import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle dark/light mode"
      icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
    />
  );
}
export default ColorModeSwitch;