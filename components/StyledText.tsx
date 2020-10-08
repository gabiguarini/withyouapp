import * as React from 'react';

import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export function PoppinsLight(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "poppins-light" }]} />
  );
}

export function PoppinsReg(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "poppins-regular" }]} />
  );
}

export function PoppinsSb(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "poppins-semibold" }]} />
  );
}