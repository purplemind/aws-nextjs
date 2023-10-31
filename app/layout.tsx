import React from 'react';

interface IRootLayout {
    children: React.ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => (
    <html lang="en">
        <body>{children}</body>
    </html>
);

export default RootLayout;