$(document).ready(function() {
    // Core Values Data
    const coreValues = [
        {
            title: "Customer First",
            description: "Kami mengutamakan kebutuhan pelanggan kami dan berusaha untuk memberikan layanan dan produk terbaik yang mungkin.",
        },
        {
            title: "Quality Commitment",
            description: "Kami berkomitmen untuk menyediakan produk berkualitas tinggi yang memenuhi dan bahkan melebihi harapan pelanggan.",
        },
        {
            title: "Innovation",
            description: "Kami terus mencari solusi dan produk inovatif untuk mendukung kebutuhan pelanggan kami yang selalu berkembang.",
        },
        {
            title: "Sustainability",
            description: "Kami berkomitmen untuk menjalankan praktik yang ramah lingkungan dalam operasional dan pemilihan produk kami.",
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