const Dropdown = ({ setFilter, setSortingFilter }) => {

    return (
        <>
            <div>
                <div style={{ padding: "10px" }} className="dropdown">


                    <button style={{ backgroundColor: "white", color: "grey" }} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Grouping
                    </button>
                 
                    <ul class="dropdown-menu">
                            <li ><a onClick={() => {
                                setFilter("user")
                            }} className="dropdown-item" href="#">User</a>
                            </li>
                            <li><a onClick={() => {
                                setFilter("priority")
                            }} className="dropdown-item" href="#">Priority</a>
                            </li>
                            <li><a onClick={() => {
                                setFilter("status")
                            }} className="dropdown-item" href="#">Status</a>
                            </li>
                        </ul>

                    <button style={{ backgroundColor: "white", color: "grey" }} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Ordering
                    </button>
                    <ul class="dropdown-menu">
                        <li ><a onClick={() => {
                            setSortingFilter("prioritywise")
                            console.log("prioritywise")
                        }} className="dropdown-item" href="#">Priority</a>
                        </li>
                        <li><a onClick={() => {
                            setSortingFilter("title")
                        }} className="dropdown-item" href="#">title</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Dropdown