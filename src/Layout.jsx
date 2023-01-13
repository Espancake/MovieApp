import styled from 'styled-components';
import React, { createContext, useState } from 'react';
//components
import Navbar from './components/Navbar';

export const DataContext = createContext({});

const Layout = ({children}) => {

    const [movieList, updateMovieList] = useState([]);

    const LayoutBox = styled.div`
        position: relative;
        z-index: 1;
        margin: 0;
        padding: 0;

    `

    return (
            <LayoutBox>
                <Navbar handleData={updateMovieList} />
                    {movieList ? (
                            <DataContext.Provider value={movieList}>
                            {children}
                            </DataContext.Provider>
                        ) : (
                            <p>Loading data...</p>
                    )}
            </LayoutBox>
    );
}


export default Layout;
