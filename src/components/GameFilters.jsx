import React from 'react'
import GameFilter from './GameFilter'
import { useOutletContext } from 'react-router-dom'

export default function GameFilters({selectedFilter, setSelectedFilter}) {
    return (
        <div className='gameFiltersContainer'>
            <GameFilter 
            filterText='All Games' 
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter} 
            />
            <GameFilter 
            filterText='Best Sellers' 
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}  
            />
            <GameFilter 
            filterText='Upcoming Games' 
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter} 
            />
            <GameFilter 
            filterText='Trending Games' 
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}  
            />
            <GameFilter 
            filterText='Cheap Games' 
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}  
            />
        </div>
    )
}
