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

function getAllImgElements() {
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
        getAllImgElements();
        expect(mainImg1Element).toBeInTheDocument();
    });
    it('main img 2 should be in the document',  () => {
        getAllImgElements();
        fireEvent.click(img1Element);
        mainImg2Element = screen.getByTestId('main-img-2-element');
        expect(mainImg2Element).toBeInTheDocument();
    });
    it('all img elements should be in the document', () => {
        getAllImgElements();
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
    it('should have specific style', () => {
        getAllImgElements();
        expect(mainImg1Element).toHaveStyle('height: auto; width: 90%');
        expect(img0Element).toHaveStyle('height: 150px; width: 150px; objectFit: cover; borderRadius: 15px; cursor: pointer; borderStyle: solid;');
        expect(img1Element).toHaveStyle('height: 150px; width: 150px; objectFit: cover; borderRadius: 15px; cursor: pointer; borderStyle: solid;');
        expect(img2Element).toHaveStyle('height: 150px; width: 150px; objectFit: cover; borderRadius: 15px; cursor: pointer; borderStyle: solid;');
        expect(img3Element).toHaveStyle('height: 150px; width: 150px; objectFit: cover; borderRadius: 15px; cursor: pointer; borderStyle: solid;');
        expect(img4Element).toHaveStyle('height: 150px; width: 150px; objectFit: cover; borderRadius: 15px; cursor: pointer; borderStyle: solid;');
        expect(img5Element).toHaveStyle('height: 150px; width: 150px; objectFit: cover; borderRadius: 15px; cursor: pointer; borderStyle: solid;');
        expect(img6Element).toHaveStyle('height: 150px; width: 150px; objectFit: cover; borderRadius: 15px; cursor: pointer; borderStyle: solid;');
        expect(img7Element).toHaveStyle('height: 150px; width: 150px; objectFit: cover; borderRadius: 15px; cursor: pointer; borderStyle: solid;');
        expect(img8Element).toHaveStyle('height: 150px; width: 150px; objectFit: cover; borderRadius: 15px; cursor: pointer; borderStyle: solid;');
        fireEvent.click(img1Element);
        mainImg2Element = screen.getByTestId('main-img-2-element');
        expect(mainImg2Element).toHaveStyle('height: 100%; width: auto; objectFit: contain');
    });
    it('should have proper src attributes', () => {
        getAllImgElements();
        expect(mainImg1Element).toHaveAttribute('src', 'DSC01193.jpg');
        expect(img0Element).toHaveAttribute('src', 'DSC01193.jpg');
        expect(img1Element).toHaveAttribute('src', 'Hero-Gallery.PNG');
        expect(img2Element).toHaveAttribute('src', 'IMG_0525.jpg');
        expect(img3Element).toHaveAttribute('src', 'IMG_3489.jpg');
        expect(img4Element).toHaveAttribute('src', 'IMG_3735.jpg');
        expect(img5Element).toHaveAttribute('src', 'IMG_4210.jpg');
        expect(img6Element).toHaveAttribute('src', 'IMG_9194.jpg');
        expect(img7Element).toHaveAttribute('src', 'SampleStyle1.PNG');
        expect(img8Element).toHaveAttribute('src', 'SampleStyle2.PNG');
        fireEvent.click(img1Element);
        mainImg2Element = screen.getByTestId('main-img-2-element');
        expect(mainImg2Element).toHaveAttribute('src', 'Hero-Gallery.PNG');
    });
    it('should have proper alt attributes', () => {
        getAllImgElements();
        expect(mainImg1Element).toHaveAttribute('alt', 'expanded');
        expect(img0Element).toHaveAttribute('alt', 'hero');
        expect(img1Element).toHaveAttribute('alt', 'hero');
        expect(img2Element).toHaveAttribute('alt', 'hero');
        expect(img3Element).toHaveAttribute('alt', 'hero');
        expect(img4Element).toHaveAttribute('alt', 'hero');
        expect(img5Element).toHaveAttribute('alt', 'hero');
        expect(img6Element).toHaveAttribute('alt', 'hero');
        expect(img7Element).toHaveAttribute('alt', 'hero');
        expect(img8Element).toHaveAttribute('alt', 'hero');
        fireEvent.click(img1Element);
        mainImg2Element = screen.getByTestId('main-img-2-element');
        expect(mainImg2Element).toHaveAttribute('alt', 'expanded');
    });
    it('should change scale when mouse hover over', async () => {
        getAllImgElements();
        fireEvent.mouseEnter(img0Element);
        await waitFor(() => expect(img0Element).toHaveStyle('transform: scale(1.1) translateZ(0)'), { timeout: 3000 });
        fireEvent.mouseEnter(img1Element);
        await waitFor(() => expect(img1Element).toHaveStyle('transform: scale(1.1) translateZ(0)'), { timeout: 3000 });
        fireEvent.mouseEnter(img2Element);
        await waitFor(() => expect(img2Element).toHaveStyle('transform: scale(1.1) translateZ(0)'), { timeout: 3000 });
        fireEvent.mouseEnter(img3Element);
        await waitFor(() => expect(img3Element).toHaveStyle('transform: scale(1.1) translateZ(0)'), { timeout: 3000 });
        fireEvent.mouseEnter(img4Element);
        await waitFor(() => expect(img4Element).toHaveStyle('transform: scale(1.1) translateZ(0)'), { timeout: 3000 });
        fireEvent.mouseEnter(img5Element);
        await waitFor(() => expect(img5Element).toHaveStyle('transform: scale(1.1) translateZ(0)'), { timeout: 3000 });
        fireEvent.mouseEnter(img6Element);
        await waitFor(() => expect(img6Element).toHaveStyle('transform: scale(1.1) translateZ(0)'), { timeout: 3000 });
        fireEvent.mouseEnter(img7Element);
        await waitFor(() => expect(img7Element).toHaveStyle('transform: scale(1.1) translateZ(0)'), { timeout: 3000 });
        fireEvent.mouseEnter(img8Element);
        await waitFor(() => expect(img8Element).toHaveStyle('transform: scale(1.1) translateZ(0)'), { timeout: 3000 });
    });
});

let row1Element;
let row2Element;
let row3Element;

function getAllRowElements() {
    render(<Gallery />);
    row1Element = screen.getByTestId('row-1-element');
    row2Element = screen.getByTestId('row-2-element');
    row3Element = screen.getByTestId('row-3-element');
}

describe('Row elements', () => {
    it('should be in the document', () => {
        getAllRowElements();
        expect(row1Element).toBeInTheDocument();
        expect(row2Element).toBeInTheDocument();
        expect(row3Element).toBeInTheDocument();
    });
    it('should have specific className', () => {
        getAllRowElements();
        expect(row1Element).toHaveClass('text-center mt-3 row-cols-sm-1');
        expect(row2Element).toHaveClass('text-center mt-3 row-cols-sm-1');
        expect(row3Element).toHaveClass('text-center mt-3 row-cols-sm-1');
    });
});

describe('Gallery', () => {
    it('should match snapshot', () => {
        act(() => {
            root.render(<Gallery />);
        });
        expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
});
