import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page title',
};

const Homepage = () => (
    <h1>Hello world!</h1>
);

export default Homepage;