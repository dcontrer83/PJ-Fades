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
        expect(div2Element).toHaveStyle('height: 100%');
        expect(div3Element).toHaveStyle('marginTop: 40px; marginBottom: 50px;');
        expect(div4Element).toHaveStyle('height: 500px');
    });
    it('should have specific className', () => {
        getAllDivElements();
        expect(div3Element).toHaveClass('text-center');
        expect(div4Element).toHaveClass('bg-dark text-white mx-auto');
    });
});

let h1Element;
let h2Element;

function getAllHeadingElements() {
    render(<Contact />);
    h1Element = screen.getByTestId('heading-1-element');
    h2Element = screen.getByTestId('heading-2-element');
}

describe('Heading elements', () => {
    it('should be in the document', () => {
        getAllHeadingElements();
        expect(h1Element).toBeInTheDocument();
        expect(h2Element).toBeInTheDocument();
    });
    it('should have specific text content', () => {
        getAllHeadingElements();
        expect(h1Element).toHaveTextContent('Contact');
        expect(h2Element).toHaveTextContent('Send a Message!');
    });
});

let p1Element;
let p2Element;
let p2AElement;

function getAllParagraphElements() {
    render(<Contact />);
    p1Element = screen.getByTestId('p-1-element');
    p2Element = screen.getByTestId('p-2-element');
    p2AElement = screen.getByTestId('p-2-a-element');
}

describe('Paragraph elements', () => {
    it('should be in the document', () => {
        getAllParagraphElements();
        expect(p1Element).toBeInTheDocument();
        expect(p2Element).toBeInTheDocument();
        expect(p2AElement).toBeInTheDocument();
    });
    it('should have specific className', () => {
        getAllParagraphElements();
        expect(p1Element).toHaveClass('fs-3');
        expect(p2Element).toHaveClass('fs-3');
    });
    it('should have specific text content', () => {
        getAllParagraphElements();
        expect(p1Element).toHaveTextContent('Phone number: 1-951-553-4409');
        expect(p2Element).toHaveTextContent('DM me on Instagram!');
        expect(p2AElement).toHaveTextContent('Instagram!');
    });
    it('should redirect to proper link', () => {
        getAllParagraphElements();
        expect(p2AElement.href).toBe('https://instagram.com/pushnpj?igshid=YmMyMTA2M2Y=');
    });
});

let formElement;

function getFormElement() {
    render(<Contact />);
    formElement = screen.getByTestId('form-element');
}

describe('Form element', () => {
    it('should be in the document', () => {
        getFormElement();
        expect(formElement).toBeInTheDocument();
    });
    it('should have specific className', () => {
        getFormElement();
        expect(formElement).toHaveClass('mx-auto');
    });
    it('should have specific style', () => {
        getFormElement();
        expect(formElement).toHaveStyle('width: 60%');
    });
});
