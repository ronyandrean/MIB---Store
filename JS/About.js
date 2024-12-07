$(document).ready(function() {
    // Core Values Data
    const coreValues = [
        {
            title: "Customer First",
            description: "We prioritize our customers' needs and strive to provide the best possible service and products.",
        },
        {
            title: "Quality Commitment",
            description: "We are dedicated to offering high-quality products that meet and exceed customer expectations.",
        },
        {
            title: "Innovation",
            description: "We continuously seek innovative solutions and products to support our customers' evolving needs.",
        },
        {
            title: "Sustainability",
            description: "We are committed to environmentally responsible practices in our operations and product selection.",
        }
    ];

    // Render Core Values
    function renderCoreValues() {
        const valuesContainer = $('#values-container');
        valuesContainer.empty();

        coreValues.forEach(value => {
            const valueItem = `
                <div class="value-item">
                    <h3>${value.title}</h3>
                    <p>${value.description}</p>
                </div>
            `;
            valuesContainer.append(valueItem);
        });
    }

    // Initialize the page
    renderCoreValues();

    // Optional: Add hover effect to values
    $('.value-item').hover(
        function() { $(this).addClass('value-item-hover'); },
        function() { $(this).removeClass('value-item-hover'); }
    );
});