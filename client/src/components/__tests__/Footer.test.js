import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Footer from '../Footer';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

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

describe('Footer', () => {
    it('should match snapshot', () => {
        act(() => {
            root.render(<Footer />);
        });
    
        expect(pretty(container.innerHTML)).toMatchSnapshot();
    })
});

let aElement;
let instagram;

function getAElement() {
    render(<Footer />);
    aElement = screen.getByTestId('a-element');
    instagram = screen.getByTestId('instagram');
}

describe('a element', () => {
    it('should be in the document', () => {
        getAElement();
        expect(aElement).toBeInTheDocument();
    });
    it('should redirect user to proper link' , () => {
        getAElement();
        expect(aElement.href).toBe('https://instagram.com/pushnpj?igshid=YmMyMTA2M2Y=');
    });
    it('should change scale when hover over', async () => {
        getAElement();
        fireEvent.mouseEnter(aElement);
        await waitFor(() => expect(aElement).toHaveStyle('transform: scale(1.2) translateZ(0)'), { timeout: 3000 });
    });
    it('should have style for instagram icon', () => {
        getAElement();
        expect(instagram).toHaveStyle('height: 50px; width: 50px; color: white; marginTop: 30px');
    });
});

let div1Element;
let div2Element;

function getDivElements() {
    render(<Footer />);
    div1Element = screen.getByTestId('div-1-element');
    div2Element = screen.getByTestId('div-2-element');
}

describe('div elements', () => {
    it('should be in the document', () => {
        getDivElements();
        expect(div1Element).toBeInTheDocument();
        expect(div2Element).toBeInTheDocument();
    });
    it('should have specific className' , () => {
        getDivElements();
        expect(div1Element).toHaveClass('text-center bg-secondary text-white align-items-center');
        expect(div2Element).toHaveClass('d-flex flex-row justify-content-center gap-4');
    });
    it('should have style', () => {
        getDivElements();
        expect(div1Element).toHaveStyle('height: 125px');
    })
})

