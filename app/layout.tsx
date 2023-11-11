import React from 'react';
import type { Metadata } from 'next';

interface IRootLayout {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Default title',
};

const RootLayout = ({ children }: IRootLayout) => (
    <html lang="en">
        <body>{children}</body>
    </html>
);

export default RootLayout;