import React from 'react';
import homeImage from '../../../assets/images/pkm-home-page.jpg'

function TopContentSection() {
    return (
        <>
        <div className='outer-most-main-container'>
            <div className='pokeworld-container-left'>
                <h1>Welcome To PokéWorld</h1>
                <h3>Discover, collect, and battle with your favorite Pokémon. 
                    Join millions of trainers in the ultimate Pokémon experience with games, cards, 
                    and endless adventures.</h3>

                <button type='button' className='home-page-pokedex-button'>Explore PokéDex</button>

            </div>
            <div className='home-img-right'>
                <img src={homeImage} className='pkm-home-img'></img>
            </div>
        </div> 
       
        </>
    );
}

export default TopContentSection;
