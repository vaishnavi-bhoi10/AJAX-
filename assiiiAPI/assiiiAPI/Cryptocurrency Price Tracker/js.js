
$(document).ready(function() {
    const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr';

   
    function fetchCryptoData() {
        $.getJSON(API_URL, function(data) {
            $('#crypto-container').empty(); 

            data.forEach(crypto => {
                $('#crypto-container').append(`
                    <div class="crypto-card" data-name="${crypto.name.toLowerCase()}">
                        <h3>${crypto.name} (${crypto.symbol.toUpperCase()})</h3>
                        <p>Current Price: ₹${crypto.current_price.toLocaleString()}</p>
                    </div>
                `);
            });
        });
    }

    fetchCryptoData();

    $('#refresh').click(function() {
        fetchCryptoData();
    });

    $('#search').on('input', function() {
        const query = $(this).val().toLowerCase();
        $('.crypto-card').each(function() {
            const name = $(this).data('name');
            if (name.includes(query)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
