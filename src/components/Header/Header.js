import React from 'react';
import { Header as Head, Icon, Image } from 'semantic-ui-react'

import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <Head as='h1' icon textAlign='center' color='violet'>
                <Icon
                    inverted color='violet'
                    name='list alternate outline'
                    circular />
                <Head.Content>Listado de tareas</Head.Content>
            </Head>
        </div>
    )
};
