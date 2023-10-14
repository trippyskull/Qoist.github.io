export const statusconvertor = (status) => {
    let extenshionObject = {
         0: " No priority",
         1: "Low",
         2: "Medium",
         3: "High",
         4: "Urgent"
    }
    return extenshionObject[status] || "None"
}