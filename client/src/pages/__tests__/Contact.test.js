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

    })
})