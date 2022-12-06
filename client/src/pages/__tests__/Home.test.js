import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Home from '../Home';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor, getByTestId } from '@testing-library/react';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let root;
let container;

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

let div1Element;
let div2Element;
let div3Element;
let div4Element;
let div5Element;
let div6Element;
let div7Element;
let div8Element;
let div9Element;
let div10Element;
let div11Element;
let div12Element;
let div13Element;
let div14Element;

function getAllDivElements() {
    render(<Home />);
    div1Element = screen.getByTestId('div-1-element');
    div2Element = screen.getByTestId('div-2-element');
    div3Element = screen.getByTestId('div-3-element');
    div4Element = screen.getByTestId('div-4-element');
    div5Element = screen.getByTestId('div-5-element');
    div6Element = screen.getByTestId('div-6-element');
    div7Element = screen.getByTestId('div-7-element');
    div8Element = screen.getByTestId('div-8-element');
    div9Element = screen.getByTestId('div-9-element');
    div10Element = screen.getByTestId('div-10-element');
    div11Element = screen.getByTestId('div-11-element');
}

describe('Div elements', () => {
    it('should be in the document', () => {
        getAllDivElements();
        expect(div1Element).toBeInTheDocument();
        expect(div2Element).toBeInTheDocument();
        expect(div3Element).toBeInTheDocument();
        expect(div4Element).toBeInTheDocument();
        expect(div5Element).toBeInTheDocument();
        expect(div6Element).toBeInTheDocument();
        expect(div7Element).toBeInTheDocument();
        expect(div8Element).toBeInTheDocument();
        expect(div9Element).toBeInTheDocument();
        expect(div10Element).toBeInTheDocument();
        expect(div11Element).toBeInTheDocument();
    });
});