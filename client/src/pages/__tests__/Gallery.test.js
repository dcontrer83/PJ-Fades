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
    });
});

let mainImg1Element;
let mainImg2Element;
let img0Element;
let img1Element;
let img2Element;
let img3Element;
let img4Element;
let img5Element;
let img6Element;
let img7Element;
let img8Element;

function getMainImg1Element() {
    render(<Gallery />);
    mainImg1Element = screen.getByTestId('main-img-1-element');
    img0Element = screen.getByTestId('img-0-element');
    img1Element = screen.getByTestId('img-1-element');
    img2Element = screen.getByTestId('img-2-element');
    img3Element = screen.getByTestId('img-3-element');
    img4Element = screen.getByTestId('img-4-element');
    img5Element = screen.getByTestId('img-5-element');
    img6Element = screen.getByTestId('img-6-element');
    img7Element = screen.getByTestId('img-7-element');
    img8Element = screen.getByTestId('img-8-element');
}

describe('Img elements', () => {
    it('main img 1 should be in the document', () => {
        getMainImg1Element();
        expect(mainImg1Element).toBeInTheDocument();
    });
    it('main img 2 should be in the document',  () => {
        getMainImg1Element();
        fireEvent.click(img1Element);
        mainImg2Element = screen.getByTestId('main-img-2-element');
        expect(mainImg2Element).toBeInTheDocument();
    });
    it('all img elements should be in the document', () => {
        getMainImg1Element();
        expect(img0Element).toBeInTheDocument();
        expect(img1Element).toBeInTheDocument();
        expect(img2Element).toBeInTheDocument();
        expect(img3Element).toBeInTheDocument();
        expect(img4Element).toBeInTheDocument();
        expect(img5Element).toBeInTheDocument();
        expect(img6Element).toBeInTheDocument();
        expect(img7Element).toBeInTheDocument();
        expect(img8Element).toBeInTheDocument();
    });
});
