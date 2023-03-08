import Tippy from '@tippyjs/react';
import React, { FC } from 'react';
import 'tippy.js/dist/tippy.css';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  return <Tippy content={<div>Hello tippy</div>} interactive trigger='click'>
    <button>My button</button>
  </Tippy>;
}
