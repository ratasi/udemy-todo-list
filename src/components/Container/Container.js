import React from 'react';
import { Container as ContainerContent, Header } from 'semantic-ui-react'

export default function Container({ children }) {
    return (
        <ContainerContent text>
            {children}
        </ContainerContent>
    )
};
