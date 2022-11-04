import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Contact from '../Contact';
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

describe('Form', () => {
    it('should change values' , () => {
        render(<Contact />);
        
        fireEvent.change(screen.getByTestId('input-name'), { target: { value: 'John Doe'}});
        fireEvent.change(screen.getByTestId('input-email'), { target: { value: 'someUser@email.com'}});
        fireEvent.change(screen.getByTestId('input-message'), { target: { value: 'Hello user'}});

        expect(screen.getByTestId('input-name').value).toEqual('John Doe');
        expect(screen.getByTestId('input-email').value).toEqual('someUser@email.com');
        expect(screen.getByTestId('input-message').value).toEqual('Hello user');

    });
});

let div1Element;
let div2Element;
let div3Element;
let div4Element;

function getAllDivElements() {
    render(<Contact />);
    div1Element = screen.getByTestId('div-1-element');
    div2Element = screen.getByTestId('div-2-element');
    div3Element = screen.getByTestId('div-3-element');
    div4Element = screen.getByTestId('div-4-element');
}

describe('Div elements', () => {
    it('should be in the document', () => {
        getAllDivElements();
        expect(div1Element).toBeInTheDocument();
        expect(div2Element).toBeInTheDocument();
        expect(div3Element).toBeInTheDocument();
        expect(div4Element).toBeInTheDocument();
    });
    it('should have specific style', () => {
        getAllDivElements();
        expect(div1Element).toHaveStyle('height: 93px');
    })
})