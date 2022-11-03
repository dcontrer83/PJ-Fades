import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Header from '../Header';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Auth from '../../utils/auth';

let container;
let root;
let navbarElement;
let containerElement;
let brandElement;
let imgElement;
let collapseElement;
let navElement;
let homeElement;
let galleryElement;
let contactElement;
let reservationElement;
let loginElement;
let profileElement;
let logoutElement;

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

describe('Navbar Element', () => {
    it('should be in the document', () => {
        getNavbarElement();
        expect(navbarElement).toBeInTheDocument();
    });
    it('should have specific className', () => {
        getNavbarElement();
        expect(navbarElement).toHaveClass('fixed-top navbar navbar-expand-sm navbar-light bg-light');
    })
});

describe('Container Element', () => {
    it('should be in the document', () => {
        getContainerElement();
        expect(containerElement).toBeInTheDocument();
    });
    it('should have specific style', () => {
        getContainerElement();
        expect(containerElement).toHaveStyle('margin: 0; maxWidth: 100%;');
    });
});

describe('Brand Element', () => {
    it('should be in the document', () => {
        getBrandElement();
        expect(brandElement).toBeInTheDocument();
    });
    it('should redirect to / when clicked', () => {
        getBrandElement();
        expect(brandElement.href).toBe('http://localhost/');
    });
});

describe('Img Element', () => {
    it('should be in the document', () => {
        getImgElement();
        expect(imgElement).toBeInTheDocument();
    });
    it('should have proper src and alt attributes', () => {
        getImgElement();
        expect(imgElement).toHaveAttribute('src', 'logo.png');
        expect(imgElement).toHaveAttribute('alt', 'logo');
    });
    it('should have specific style', () => {
        getImgElement();
        expect(imgElement).toHaveStyle('width: 92px; height: 75px');
    });
});

describe('Collapse Element', () => {
    it('should be in the document', () => {
        getCollapseElement();
        expect(collapseElement).toBeInTheDocument();
    });
    it('should have specific className', () => {
        getCollapseElement();
        expect(collapseElement).toHaveClass('justify-content-end');
    });
});

function getNavElement() {
    render(<Header />);
    navElement = screen.getByTestId('nav-element');
};

describe('Nav Element', () => {
    it('should be in the document', () => {
        getNavElement();
        expect(navElement).toBeInTheDocument();
    });
    it('should have specific className', () => {
        getNavElement();
        expect(navElement).toHaveClass('justify-content-around');
    });
    it('should have specific style', () => {
        getNavElement();
        expect(navElement).toHaveStyle('width: 60%; marginRight: 10%; fontSize: 20px');
    });
});


function getNavLinks() {
    render(<Header />);
    homeElement = screen.getByTestId('home-element');
    galleryElement = screen.getByTestId('gallery-element');
    contactElement = screen.getByTestId('contact-element');
    reservationElement = screen.getByTestId('reservation-element');
    loginElement = screen.getByTestId('login-element');
}

describe('Nav Link Elements', () => {
    it('should be in the document', () => {
        getNavLinks();
        expect(homeElement).toBeInTheDocument();
        expect(galleryElement).toBeInTheDocument();
        expect(contactElement).toBeInTheDocument();
        expect(reservationElement).toBeInTheDocument();
        expect(loginElement).toBeInTheDocument();
    });
    it('should redirect to proper link', () => {
        getNavLinks();
        expect(homeElement.href).toBe('http://localhost/');
        expect(galleryElement.href).toBe('http://localhost/gallery');
        expect(contactElement.href).toBe('http://localhost/contact');
        expect(reservationElement.href).toBe('http://localhost/reservation');
        expect(loginElement.href).toBe('http://localhost/login');
    });
});

function getLoggedInElements() {
    render(<Header />);
    profileElement = screen.getByTestId('profile-element');
    logoutElement = screen.getByTestId('logout-element');
}

describe('Profile and Logout link when logged in', () => {
    it('should be in the document', () => {
        jest.spyOn(Auth, 'loggedIn').mockReturnValue(true);
        getLoggedInElements();
        expect(profileElement).toBeInTheDocument();
        expect(logoutElement).toBeInTheDocument();
    });
    it('should redirect to proper link', () => {
        jest.spyOn(Auth, 'loggedIn').mockReturnValue(true);
        getLoggedInElements();
        expect(profileElement.href).toBe('http://localhost/profile');
        expect(logoutElement.href).toBe('http://localhost/');
    });
});

function getNavbarElement() {
    render(<Header />);
    navbarElement = screen.getByTestId('navbar-element');
}

function getContainerElement() {
    render(<Header />);
    containerElement = screen.getByTestId('container-element');
}

function getBrandElement() {
    render(<Header />);
    brandElement = screen.getByTestId('brand-element');
}

function getImgElement() {
    render(<Header />);
    imgElement = screen.getByTestId('img-element');
}

function getCollapseElement() {
    render(<Header />);
    collapseElement = screen.getByTestId('collapse-element');
}