import React, { createContext, useState } from 'react';
//components
import Navbar from './components/Navbar';

export const DataContext = createContext({});

const Layout = ({children}) => {

    const [movieList, updateMovieList] = useState([]);

    return (
            <React.Fragment>
                <Navbar handleData={updateMovieList} />
                {movieList ? (
                        <DataContext.Provider value={movieList}>
                        {children}
                        </DataContext.Provider>
                    ) : (
                        <p>Loading data...</p>
                )}
            </React.Fragment>
    );
}


export default Layout;
