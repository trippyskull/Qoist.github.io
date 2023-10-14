import { useEffect, useState } from "react";
import axios from "axios";
import { BsGearWide } from "react-icons/bs";
import { BsReception0 } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";
import { statusconvertor } from "./utils";
import "./dashboard.css"
import { BsPlusLg, BsThreeDots } from "react-icons/bs";

const Dashboard = ({ filter, sortingFilter, sortByTitle, sortedDayta }) => {

    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([])
    const [headers2, setHeaders2] = useState([])
    const [loading, setLoading] = useState(true);
    let [priority, setPriority] = useState([])
    const [prioritySort, setPrioritySort] = ([])


    const substringmethod = (data) => {
        if (data.length > 45) {
            return data.substring(0, 45) + "..."
        }
        else {
            return data
        }
    }

    async function GetData() {

        let response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
        if (response.data) {
            setData(response.data)
            let array = []
            response.data.tickets.forEach(element => {
                if (!array.includes(element.priority))
                    array.push(element.priority)
            });
            array.sort((a, b) => a - b)
            setHeaders(array)

            let arr = []
            response.data.tickets.forEach(ele => {
                if (!arr.includes(ele.status))
                    arr.push(ele.status)
            })
            console.log(response.data, "rrrrrrrrrrrrrrrrrrrrrrrr");


            setHeaders2(arr)

        }
    }

    //     let arr = [1,1,2,2,3,4]
    // let array = []
    // arr.forEach((item) => {

    //     if(!array.includes(item))
    //     array.push(item)
    // })

    useEffect(() => {
        GetData()
    }, [])

    console.log(data, "<==data")
    console.log("priority ==> ",
    );

    return (
        <>
            <div>
                <div style={{ display: "flex",  height: "95vh" }}  className="dashboard" >
                    {
                        filter === "user" ?


                            data?.users?.map((headerItem, index) => {

                                return (
                                    <div style={{ padding: "20px" }}>
                                        <div style={{ width: "75%" }}>
                                            <div style={{ width: "250px", display: "flex", justifyContent: "space-between" }}>
                                                <div>
                                                    <h4 style={{ fontSize: "18px" }}>{headerItem.name} </h4>
                                                </div>
                                                <div>
                                                    <BsPlusLg />
                                                    <BsThreeDots />
                                                </div>
                                            </div>

                                            <div >
                                                <div >
                                                    {

                                                        sortingFilter === "prioritywise" ?
                                                            sortedDayta?.map(dataItem => {
                                                                if (dataItem.userId === headerItem.id)
                                                                    return (
                                                                        <>
                                                                            <div style={{ marginBottom: "20px", height: "130px", width: "250px" }} className="card">
                                                                                <div className="card-body">
                                                                                    <div>
                                                                                        <div style={{ height: "60px" }}>
                                                                                            <p style={{ fontSize: "16px", fontWeight: 500, color: "gray", marginBottom: "0px" }}>{dataItem.id}</p>
                                                                                            <div className="row">
                                                                                                <div className="col-lg-1">
                                                                                                    <BsGearWide style={{ color: "grey" }} />
                                                                                                </div>
                                                                                                <div className="col">
                                                                                                    <p style={{ fontSize: "14px", fontWeight: 700 }}>{substringmethod(dataItem.title)}</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row">
                                                                                            <div className="col-lg-1">
                                                                                                <BsReception0 />
                                                                                            </div>
                                                                                            <div style={{ marginTop: "6px", display: "flex" }} className="col">
                                                                                                <div>
                                                                                                    <BsCircleFill style={{ color: "#cbcbcb7d" }} />
                                                                                                </div>
                                                                                                <div>
                                                                                                    <p style={{ marginLeft: "4px" }}>{dataItem.tag}</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </>
                                                                    )
                                                            })
                                                            : sortingFilter === "title" ?
                                                                sortByTitle?.map(dataItem => {
                                                                    if (dataItem.userId === headerItem.id)
                                                                        return (
                                                                            <>
                                                                                <div style={{ marginBottom: "20px", height: "130px", width: "250px" }} className="card">
                                                                                    <div className="card-body">
                                                                                        <div>
                                                                                            <div style={{ height: "60px" }}>
                                                                                                <p style={{ fontSize: "16px", fontWeight: 500, color: "gray", marginBottom: "0px" }}>{dataItem.id}</p>
                                                                                                <div className="row">
                                                                                                    <div className="col-lg-1">
                                                                                                        <BsGearWide style={{ color: "grey" }} />
                                                                                                    </div>
                                                                                                    <div className="col">
                                                                                                        <p style={{ fontSize: "14px", fontWeight: 700 }}>{substringmethod(dataItem.title)}</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                                <div className="col-lg-1">
                                                                                                    <BsReception0 />
                                                                                                </div>
                                                                                                <div style={{ marginTop: "6px", display: "flex" }} className="col">
                                                                                                    <div>
                                                                                                        <BsCircleFill style={{ color: "#cbcbcb7d" }} />
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <p style={{ marginLeft: "4px" }}>{dataItem.tag}</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </>
                                                                        )
                                                                }) :
                                                                data?.tickets?.map(dataItem => {
                                                                    if (dataItem.userId === headerItem.id)
                                                                        return (
                                                                            <>
                                                                                <div style={{ marginBottom: "20px", height: "130px", width: "250px" }} className="card">
                                                                                    <div className="card-body">
                                                                                        <div>
                                                                                            <div style={{ height: "60px" }}>
                                                                                                <p style={{ fontSize: "16px", fontWeight: 500, color: "gray", marginBottom: "0px" }}>{dataItem.id}</p>
                                                                                                <div className="row">
                                                                                                    <div className="col-lg-1">
                                                                                                        <BsGearWide style={{ color: "grey" }} />
                                                                                                    </div>
                                                                                                    <div className="col">
                                                                                                        <p style={{ fontSize: "14px", fontWeight: 700 }}>{substringmethod(dataItem.title)}</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="row">
                                                                                                <div className="col-lg-1">
                                                                                                    <BsReception0 />
                                                                                                </div>
                                                                                                <div style={{ marginTop: "6px", display: "flex" }} className="col">
                                                                                                    <div>
                                                                                                        <BsCircleFill style={{ color: "#cbcbcb7d" }} />
                                                                                                    </div>
                                                                                                    <div>
                                                                                                        <p style={{ marginLeft: "4px" }}>{dataItem.tag}</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </>
                                                                        )
                                                                })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })

                            : filter === "priority" ?
                                <div className="dashboard2" style={{ display: "flex", background: "#f7f8fc94", height: "95vh" }}>
                                    {

                                        headers?.map((headerItem, index) => {

                                            return (
                                                <div style={{ padding: "20px", width: "19%" }}>
                                                    <div style={{ width: "75%" }}>
                                                        <div style={{ width: "250px", display: "flex", justifyContent: "space-between" }}>
                                                            <div>
                                                                <h4 style={{ fontSize: "18px" }}>{statusconvertor(headerItem)}</h4>
                                                            </div>
                                                            <div>
                                                                <BsPlusLg />
                                                                <BsThreeDots />
                                                            </div>
                                                        </div>

                                                        <div>
                                                            {
                                                                <div>
                                                                    {
                                                                        sortingFilter === "prioritywise" ?
                                                                            sortedDayta?.map(dataItem => {
                                                                                if (dataItem.priority === headerItem)

                                                                                    return (
                                                                                        <>
                                                                                            <div style={{ marginBottom: "20px", height: "130px", width: "250px" }} className="card">
                                                                                                <div className="card-body">
                                                                                                    <div>
                                                                                                        <div style={{ height: "60px" }}>
                                                                                                            <p style={{ fontSize: "16px", fontWeight: 500, color: "gray", marginBottom: "0px" }}>{dataItem.id}</p>
                                                                                                            <div className="row">
                                                                                                                <div className="col-lg-1">
                                                                                                                    <BsGearWide style={{ color: "grey" }} />
                                                                                                                </div>
                                                                                                                <div className="col">
                                                                                                                    <p style={{ fontSize: "14px", fontWeight: 700 }}>{substringmethod(dataItem.title)}</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="row">
                                                                                                            <div className="col-lg-1">
                                                                                                                <BsReception0 />
                                                                                                            </div>
                                                                                                            <div style={{ marginTop: "6px", display: "flex" }} className="col">
                                                                                                                <div>
                                                                                                                    <BsCircleFill style={{ color: "#cbcbcb7d" }} />
                                                                                                                </div>
                                                                                                                <div>
                                                                                                                    <p style={{ marginLeft: "4px" }}>{dataItem.tag}</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </>
                                                                                    )
                                                                            }) : sortingFilter === "title" ?
                                                                                sortByTitle?.map(dataItem => {
                                                                                    if (dataItem.priority === headerItem)

                                                                                        return (
                                                                                            <>
                                                                                                <div style={{ marginBottom: "20px", height: "130px", width: "250px" }} className="card">
                                                                                                    <div className="card-body">
                                                                                                        <div>
                                                                                                            <div style={{ height: "60px" }}>
                                                                                                                <p style={{ fontSize: "16px", fontWeight: 500, color: "gray", marginBottom: "0px" }}>{dataItem.id}</p>
                                                                                                                <div className="row">
                                                                                                                    <div className="col-lg-1">
                                                                                                                        <BsGearWide style={{ color: "grey" }} />
                                                                                                                    </div>
                                                                                                                    <div className="col">
                                                                                                                        <p style={{ fontSize: "14px", fontWeight: 700 }}>{substringmethod(dataItem.title)}</p>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="row">
                                                                                                                <div className="col-lg-1">
                                                                                                                    <BsReception0 />
                                                                                                                </div>
                                                                                                                <div style={{ marginTop: "6px", display: "flex" }} className="col">
                                                                                                                    <div>
                                                                                                                        <BsCircleFill style={{ color: "#cbcbcb7d" }} />
                                                                                                                    </div>
                                                                                                                    <div>
                                                                                                                        <p style={{ marginLeft: "4px" }}>{dataItem.tag}</p>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </>
                                                                                        )
                                                                                }) :
                                                                                data?.tickets?.map(dataItem => {
                                                                                    if (dataItem.priority === headerItem)

                                                                                        return (
                                                                                            <>
                                                                                                <div style={{ marginBottom: "20px", height: "130px", width: "250px" }} className="card">
                                                                                                    <div className="card-body">
                                                                                                        <div>
                                                                                                            <div style={{ height: "60px" }}>
                                                                                                                <p style={{ fontSize: "16px", fontWeight: 500, color: "gray", marginBottom: "0px" }}>{dataItem.id}</p>
                                                                                                                <div className="row">
                                                                                                                    <div className="col-lg-1">
                                                                                                                        <BsGearWide style={{ color: "grey" }} />
                                                                                                                    </div>
                                                                                                                    <div className="col">
                                                                                                                        <p style={{ fontSize: "14px", fontWeight: 700 }}>{substringmethod(dataItem.title)}</p>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="row">
                                                                                                                <div className="col-lg-1">
                                                                                                                    <BsReception0 />
                                                                                                                </div>
                                                                                                                <div style={{ marginTop: "6px", display: "flex" }} className="col">
                                                                                                                    <div>
                                                                                                                        <BsCircleFill style={{ color: "#cbcbcb7d" }} />
                                                                                                                    </div>
                                                                                                                    <div>
                                                                                                                        <p style={{ marginLeft: "4px" }}>{dataItem.tag}</p>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </>
                                                                                        )
                                                                                })
                                                                    }
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div> : filter === "status" ?
                                    <div style={{ padding: "20px", width: "19%" }}>
                                        <div className="dashboard3" style={{ display: "flex" }}>
                                            {
                                                headers2?.map((headerItem, index) => {
                                                    return (
                                                        <div style={{ paddingRight: "60px" }}>
                                                            <div style={{ width: "250px", display: "flex", justifyContent: "space-between" }}>
                                                                <div>
                                                                    <h4 style={{ fontSize: "18px" }}>{headerItem} </h4>
                                                                </div>
                                                                <div>
                                                                    <BsPlusLg />
                                                                    <BsThreeDots />
                                                                </div>
                                                            </div>
                                                            {
                                                                <div>
                                                                    {
                                                                        sortingFilter === "prioritywise" ?
                                                                            sortedDayta?.map(dataItem => {
                                                                                if (dataItem.status === headerItem)
                                                                                    return (
                                                                                        <>
                                                                                            <div style={{ marginBottom: "20px", height: "130px", width: "250px" }} className="card">
                                                                                                <div className="card-body">
                                                                                                    <div>
                                                                                                        <div style={{ height: "60px" }}>
                                                                                                            <p style={{ fontSize: "16px", fontWeight: 500, color: "gray", marginBottom: "0px" }}>{dataItem.id}</p>
                                                                                                            <div className="row">
                                                                                                                <div className="col-lg-1">
                                                                                                                    <BsGearWide style={{ color: "grey" }} />
                                                                                                                </div>
                                                                                                                <div className="col">
                                                                                                                    <p style={{ fontSize: "14px", fontWeight: 700 }}>{substringmethod(dataItem.title)}</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="row">
                                                                                                            <div className="col-lg-1">
                                                                                                                <BsReception0 />
                                                                                                            </div>
                                                                                                            <div style={{ marginTop: "6px", display: "flex" }} className="col">
                                                                                                                <div>
                                                                                                                    <BsCircleFill style={{ color: "#cbcbcb7d" }} />
                                                                                                                </div>
                                                                                                                <div>
                                                                                                                    <p style={{ marginLeft: "4px" }}>{dataItem.tag}</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </>
                                                                                    )
                                                                            }) : sortingFilter === "title" ? sortedDayta?.map(dataItem => {
                                                                                if (dataItem.status === headerItem)
                                                                                    return (
                                                                                        <>
                                                                                            <div style={{ marginBottom: "20px", height: "130px", width: "250px" }} className="card">
                                                                                                <div className="card-body">
                                                                                                    <div>
                                                                                                        <div style={{ height: "60px" }}>
                                                                                                            <p style={{ fontSize: "16px", fontWeight: 500, color: "gray", marginBottom: "0px" }}>{dataItem.id}</p>
                                                                                                            <div className="row">
                                                                                                                <div className="col-lg-1">
                                                                                                                    <BsGearWide style={{ color: "grey" }} />
                                                                                                                </div>
                                                                                                                <div className="col">
                                                                                                                    <p style={{ fontSize: "14px", fontWeight: 700 }}>{substringmethod(dataItem.title)}</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="row">
                                                                                                            <div className="col-lg-1">
                                                                                                                <BsReception0 />
                                                                                                            </div>
                                                                                                            <div style={{ marginTop: "6px", display: "flex" }} className="col">
                                                                                                                <div>
                                                                                                                    <BsCircleFill style={{ color: "#cbcbcb7d" }} />
                                                                                                                </div>
                                                                                                                <div>
                                                                                                                    <p style={{ marginLeft: "4px" }}>{dataItem.tag}</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </>
                                                                                    )
                                                                            }) :
                                                                                data?.tickets?.map(dataItem => {
                                                                                    if (dataItem.status === headerItem)
                                                                                        return (
                                                                                            <>
                                                                                                <div style={{ marginBottom: "20px", height: "130px", width: "250px" }} className="card">
                                                                                                    <div className="card-body">
                                                                                                        <div>
                                                                                                            <div style={{ height: "60px" }}>
                                                                                                                <p style={{ fontSize: "16px", fontWeight: 500, color: "gray", marginBottom: "0px" }}>{dataItem.id}</p>
                                                                                                                <div className="row">
                                                                                                                    <div className="col-lg-1">
                                                                                                                        <BsGearWide style={{ color: "grey" }} />
                                                                                                                    </div>
                                                                                                                    <div className="col">
                                                                                                                        <p style={{ fontSize: "14px", fontWeight: 700 }}>{substringmethod(dataItem.title)}</p>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="row">
                                                                                                                <div className="col-lg-1">
                                                                                                                    <BsReception0 />
                                                                                                                </div>
                                                                                                                <div style={{ marginTop: "6px", display: "flex" }} className="col">
                                                                                                                    <div>
                                                                                                                        <BsCircleFill style={{ color: "#cbcbcb7d" }} />
                                                                                                                    </div>
                                                                                                                    <div>
                                                                                                                        <p style={{ marginLeft: "4px" }}>{dataItem.tag}</p>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </>
                                                                                        )
                                                                                })

                                                                    }
                                                                </div>
                                                            }
                                                        </div>
                                                    )
                                                })



                                            }
                                        </div>
                                    </div> : ""
                    }

                </div>

            </div>

        </>
    )
}

export default Dashboard