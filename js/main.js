// Server data
const serverData = [
    { name: "Server Alpha", ip: "192.168.1.1", status: "Online", location: "New York", memory: { used: 40, total: 100 }, cpu: 35 },
    { name: "Server Beta", ip: "10.0.0.1", status: "Offline", location: "London", memory: { used: 0, total: 100 }, cpu: 0 },
    { name: "Server Gamma", ip: "172.16.0.1", status: "Online", location: "Tokyo", memory: { used: 60, total: 100 }, cpu: 45 },
    { name: "Server Delta", ip: "192.168.2.1", status: "Online", location: "Berlin", memory: { used: 30, total: 100 }, cpu: 20 },
    { name: "Server Epsilon", ip: "10.0.1.2", status: "Offline", location: "Paris", memory: { used: 0, total: 100 }, cpu: 0 },
    { name: "Server Zeta", ip: "172.16.1.2", status: "Online", location: "San Francisco", memory: { used: 20, total: 100 }, cpu: 15 },
    { name: "Server Eta", ip: "192.168.3.3", status: "Offline", location: "Sydney", memory: { used: 0, total: 100 }, cpu: 0 },
    { name: "Server Theta", ip: "10.1.1.1", status: "Online", location: "Los Angeles", memory: { used: 75, total: 100 }, cpu: 75 },
    { name: "Server Iota", ip: "172.17.0.1", status: "Online", location: "Kyiv", memory: { used: 40, total: 100 }, cpu: 40 },
    { name: "Server Kappa", ip: "192.168.4.2", status: "Offline", location: "Madrid", memory: { used: 0, total: 100 }, cpu: 0 },
    // More server entries (30 servers in total)
];

// Function to update server data
function updateServerData() {
    serverData.forEach(server => {
        // Simulate memory and CPU changes

        if (server.cpu!==0 && server.memory.used!==0){
            server.memory.used += Math.random() * 10 - 5;  // Random change between -5 and 5
            server.memory.used = Math.max(0, Math.min(server.memory.used, server.memory.total));

            server.cpu += Math.random() * 10 - 5;  // Random change between -5 and 5
            server.cpu = Math.max(0, Math.min(server.cpu, 100));
        }


    });
}

// Function to render the server table
function updateServerTable() {

    const tableBody = document.querySelector("#serverTable tbody");
    tableBody.innerHTML = ""; // Clear the table before updating

    const filter = document.getElementById("filterSelect").value;

    serverData.forEach(server => {
        if (filter === "offline" && server.status !== "Offline") return;
        if (filter === "highCpu" && server.cpu <= 50) return;

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${server.name}</td>
            <td>${server.ip}</td>
            <td class="status-${server.status.toLowerCase()}">${server.status}</td>
            <td>${server.location}</td>
            <td>${server.memory.used.toFixed(1)} / ${server.memory.total}</td>
            <td>${server.cpu.toFixed(1)}%</td>
        `;

        tableBody.appendChild(row);
    });
}

// Handle filter changes
document.getElementById("filterSelect").addEventListener("change", updateServerTable);

// Automatically refresh the table every 5 seconds
setInterval(() => {
    updateServerData();
    updateServerTable();
}, 5000);

// Initial table load
updateServerTable();
