import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Header from '../Header';

let container;
let root;
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
        root = createRoot(container);
    })
});

afterEach(() => {
    act(() => {
        root.unmount();
    })
    container.remove();
    container = null;
});

describe('Header', () => {
    it('should match snapshot', () => {
        act(() => {
            root.render(<Header />);
        });
        expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
});