let chartWidget;
let currentSymbol = 'ETHUSDT';
let currentInterval = '1';

function initTradingViewChart(symbol, interval) {
    if (chartWidget) {
        chartWidget.remove();
    }

    chartWidget = new TradingView.widget({
        symbol: symbol,
        interval: interval,
        container_id: "tradingviewChart",
        locale: "en",
        width: "100%",
        height: "600",
        theme: "light",
        style: "1", // Style for candlestick chart
        toolbar_bg: "#f1f3f6",
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        save_image: false,
        studies: [],
        show_popup_button: true,
        popup_width: "1000",
        popup_height: "650",
        autosize: true
    });
}

document.getElementById('coinSelect').addEventListener('change', (event) => {
    currentSymbol = event.target.value;
    initTradingViewChart(currentSymbol, currentInterval);
});

document.getElementById('intervalSelect').addEventListener('change', (event) => {
    currentInterval = event.target.value;
    initTradingViewChart(currentSymbol, currentInterval);
});

initTradingViewChart(currentSymbol, currentInterval);