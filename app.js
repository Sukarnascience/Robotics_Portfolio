function isMobileView() {
    return window.innerWidth < 600;
}

// Function to display an alert if viewed on a mobile view
function showAlertForMobileView() {
    if (isMobileView()) {
        alert('<ERROR>\nThis website is best viewed on a desktop or larger screen. Some features may not be optimized for mobile devices.\n</ERROR>');
    }
}

// Call the function when the page loads
window.onload = function() {
    showAlertForMobileView();
};
