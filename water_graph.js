// Generate the last 30 days' labels (day numbers) ending today
function getLastNDaysLabels(n) {
    const labels = [];
    const today = new Date();
    for (let i = n - 1; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        labels.push(d.getDate()); // just day of month
    }
    return labels;
}

// Example hardcoded daily water usage (liters) per zone
const zone1Data = [5,6,5,5,6,5,4,5,6,5,5,6,5,5,6,5,5,6,5,5,5,5,6,5,5,6,5,5,6,5];
const zone2Data = [4,4,5,4,4,5,4,5,4,4,5,4,4,5,4,5,4,4,5,4,4,5,4,4,5,4,5,4,4,5];
const zone3Data = [5,5,6,5,5,6,5,6,5,5,6,5,5,6,5,5,6,5,5,6,5,5,6,5,5,6,5,5,6,5];

// Labels (days of month)
const labels = getLastNDaysLabels(30);

// Function to create a chart
function createZoneGraph(canvasId, data, label, totalId, lineColor) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${label} daily water usage (L)`,
                data: data,
                borderColor: lineColor,
                backgroundColor: 'rgba(0,0,0,0)',
                tension: 0.2,
                fill: false,
                pointRadius: 3,
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: { display: true, text: 'Day of Month' }
                },
                y: {
                    title: { display: true, text: 'Water (L)' },
                    beginAtZero: true
                }
            }
        }
    });

    // Calculate total water
    const total = data.reduce((sum, val) => sum + val, 0);
    document.getElementById(totalId).textContent = `Total water used: ${total} L`;
}

// Create all three graphs
createZoneGraph('zone1Graph', zone1Data, 'Zone 1 – Rose', 'zone1Total', 'red');
createZoneGraph('zone2Graph', zone2Data, 'Zone 2 – Rosa chinensis', 'zone2Total', 'green');
createZoneGraph('zone3Graph', zone3Data, 'Zone 3 – Rosa ragusa', 'zone3Total', 'blue');
