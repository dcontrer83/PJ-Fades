import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Gallery from '../Gallery';
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

function getAllDivElements() {
    render(<Gallery />);
    div1Element = screen.getByTestId('div-1-element');
    div2Element = screen.getByTestId('div-2-element');
    div3Element = screen.getByTestId('div-3-element');
    div4Element = screen.getByTestId('div-4-element');
    div5Element = screen.getByTestId('div-5-element');
}

describe('Div elements', () => {
    it('should be in the document', () => {
        getAllDivElements();
        expect(div1Element).toBeInTheDocument();
        expect(div2Element).toBeInTheDocument();
        expect(div3Element).toBeInTheDocument();
        expect(div4Element).toBeInTheDocument();
        expect(div5Element).toBeInTheDocument();
    });
    it('should have specific style', () => {
        getAllDivElements();
        expect(div1Element).toHaveStyle('height: 75px');
        expect(div2Element).toHaveStyle('height: 1000px');
        expect(div3Element).toHaveStyle('height: 95%; width: 100%');
        expect(div4Element).toHaveStyle('height: 50%; width: 100%');
        expect(div4Element).not.toHaveStyle('height: 90%');
        expect(div5Element).toHaveStyle('height: 50%; width: 100%');
        expect(div5Element).not.toHaveStyle('height: 90%');
    });
    it('should have specific className', () => {
        getAllDivElements();
        expect(div3Element).toHaveClass('d-flex flex-column flex-lg-row align-items-center');
        expect(div4Element).toHaveClass('bg-light d-flex justify-content-center align-items-center');
        expect(div5Element).toHaveClass('d-flex flex-row bg-light');
    });
});

let h1Element;

function getH1Element() {
    render(<Gallery />);
    h1Element = screen.getByTestId('h1-element');
}

describe('H1 element', () => {
    it('should be in the document', () => {
        getH1Element();
        expect(h1Element).toBeInTheDocument();
    });
    it('should have specific className', () => {
        getH1Element();
        expect(h1Element).toHaveClass('text-center mt-5');
    });
    it('should have specific text content', () => {
        getH1Element();
        expect(h1Element).toHaveTextContent('Gallery');
    })
})
