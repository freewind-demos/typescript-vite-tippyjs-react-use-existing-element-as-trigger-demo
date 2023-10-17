import Tippy from '@tippyjs/react';
import React, {FC, useEffect, useRef} from 'react';
import 'tippy.js/dist/tippy.css';

type Props = {};

export const Hello: FC<Props> = ({}) => {
    const reference = useRef<Element | null>(null);

    useEffect(() => {
        const button = document.querySelector('#hello1');
        reference.current = button;
    }, [])

    return <Tippy appendTo={document.body} content={<div>Hello tippy</div>} interactive trigger='click'
                  reference={reference.current}/>;
}
