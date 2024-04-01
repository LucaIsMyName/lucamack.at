(function () {
    const chartJs = document.createElement('script');
    chartJs.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    chartJs.defer = true;
    chartJs.onload = initializeCharts; // Ensure Chart.js is loaded before initializing
    document.head.appendChild(chartJs);

    function initializeCharts() {

        /**
         * HTML -> JS array
         */
        function transformArray(str) {
            try {
                if (typeof str !== 'string') {
                    // If it's not a string, return it as is (assuming it's already the correct format)
                    console.log('Non-string input:', str);
                    return str;
                }
                // Decode HTML entities, replace single quotes with double quotes, and parse the JSON array
                const correctedString = str.replace(/&quot;/g, '"').replace(/'/g, '"');
                const parsedArray = JSON.parse(correctedString);
                console.log('Parsed array:', parsedArray);
                return parsedArray;
            } catch (e) {
                console.error('Error parsing array:', e);
                return [];
            }
        }


        function transformObject(str) {
            try {
                if (typeof str !== 'string') {
                    // If it's not a string, return it as is (assuming it's already the correct format)
                    console.log('str: ' + str);
                    return str;
                }
                // Decode HTML entities, replace single quotes with double quotes, and parse the JSON object
                const correctedString = str.replace(/&quot;/g, '"').replace(/'/g, '"');
                console.log('Corrected String: ' + correctedString);
                return JSON.parse(correctedString);
            } catch (e) {
                console.error('Error parsing object:', e);
                return {};
            }
        }



        const charts = document.querySelectorAll('[data-visu]');
        charts.forEach((chart) => {
            // Tests
            const rawData = chart.getAttribute('data-visu-data');
            // const data = transformArray(rawData || '[12, 23, 34, 45]');
            const ctx = chart.getContext('2d');
            const type = chart.getAttribute('data-visu-type') || 'bar';
            const labels = transformArray(chart.getAttribute('data-visu-labels') || '["P1","P2","P3","P4"]');
            console.log('Raw data attribute:', rawData);
            const data = transformArray(chart.getAttribute('data-visu-data') || '[12, 23, 34, 45]');
            console.log('Parsed array:', data); // Confirm the parsed data is correct
            const borderWidth = parseInt(chart.getAttribute('data-visu-border-width'), 10) || 1;

            createChart(
                ctx,
                type,
                labels,
                data,
                borderWidth
            );
        });
    }

    function createChart(
        ctx,
        type = 'bar',
        labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        label = '# of Votes',
        data = [12, 19, 3, 5, 2, 3],
        borderWidth = 1,
        beginAtZero = true
    ) {
        console.log('Data type:', typeof data[0]); // Should be 'number' for each entry
        console.log('Data:', data); // Log the actual data

        const testData = [12, 19, 3, 5, 2, 3]; // Hardcoded data for testing

        new Chart(
            ctx, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: data,
                    borderWidth: borderWidth
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: beginAtZero
                    }
                }
            }
        });
    }
})();
