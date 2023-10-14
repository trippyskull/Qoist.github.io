import { useEffect, useState } from "react"
import Dashboard from "../components/Dashboard"
import Dropdown from "../components/Dropdown"



const Home = ({sortedDayta,sortByTitle}) => {
    
    const [filter,setFilter] = useState("")
    
    const [sortingFilter,setSortingFilter] = useState("")
    useEffect(()=>{
        const filter = localStorage.getItem('selectedTab') || 'user';
        const sorted = localStorage.getItem('sortedItems') || ''
        setFilter(filter)
    },[])
    // async function GetData() {

    //     let response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
    //     if (response.data) {
    //         setHomeData(response.data)
    //     }
    // }
    const setFilterTab = (tab) => {
        setFilter(tab)
        localStorage.setItem('selectedTab',tab)
        localStorage.getItem('sortedItems',tab)
    }
    return (
        <> 
            <Dropdown setSortingFilter={setSortingFilter} setFilter={setFilterTab}/>
            <Dashboard sortByTitle={sortByTitle} sortedDayta={sortedDayta} sortingFilter={sortingFilter} filter={filter}/>
        </>
    )
}
export default Home