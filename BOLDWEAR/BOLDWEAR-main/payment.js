$(document).ready(function() {
    var modal = $('#payment-modal');
    var span = $('.close');
    var countdownDisplay = $('#countdown'); // Assuming you have an element to show the countdown

    // Show the modal when the page is loaded (you can customize this as needed)
    modal.show();

    span.on('click', function() {
        closeModal();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is(modal)) {
            closeModal();
        }
    });

    // Function to close the modal and redirect
    function closeModal() {
        modal.hide();
        window.location.href = 'orderconfirm.html';
    }

    // Start countdown for 60 seconds
    var countdown = 60;
    var countdownInterval = setInterval(function() {
        countdownDisplay.text(countdown + ' seconds remaining'); // Update countdown display
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval); // Stop the countdown
            closeModal(); // Close the modal and redirect
        }
    }, 1000); // Update every second
});