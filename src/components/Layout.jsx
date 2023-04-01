import styled from 'styled-components';
import React, { createContext, useState } from 'react';
//components
import Navbar from './Navbar';
import NotFound from './NotFound'
import Stars from '../images/stars.svg'

export const DataContext = createContext({});
const Layout = ({children}) => {

    const [movieList, updateMovieList] = useState([]);
    const [location , setLocation] = useState(null)
    const LayoutBox = styled.div`
        background: url(${Stars}), #1B1B25;
        background-repeat: repeat;
        align-items: center;
        width: 100%;
        height: 100vh;
        position: relative;
        margin: 0;
        padding: 0;

    `
    const ChildrenContainer = styled.div`
        position: relative;
        z-index:1 ;
    `;
    

    return (
            <LayoutBox>
                <Navbar 
                handleLocation={setLocation} 
                currentLocation={location}
                handleData={updateMovieList} 
                
                />
                <ChildrenContainer>
                    {movieList ? (
                            <DataContext.Provider value={movieList}>
                                <ChildrenContainer>
                                    {children} 
                                </ChildrenContainer>
                            </DataContext.Provider>
                        ) : (
                            <NotFound/>
                    )}
                </ChildrenContainer>
            </LayoutBox>
    );
}


export default Layout;
