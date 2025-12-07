import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function GameFilter({filterText}) {
    const {selectedFilter, setSelectedFilter } = useOutletContext()
    return (
        <div
            className={selectedFilter === filterText
                ? 'gameFilterContainer-active'
                : 'gameFilterContainer'}
            onClick={() => setSelectedFilter(filterText)}
        >{filterText}</div>
    )
}
