function ticketDetails() {
    const seats = document.querySelectorAll("#seat-section .btn");
    const selectedSeats = [];
    const selectedClassName = [];
    const selectedPrice = [];

    const totalSeat = document.getElementById("total-seat");
    const seatCount = document.getElementById("seat-count");
    const selectSeat = document.getElementById("select-seat");
    const className = document.getElementById("class-name");
    const priceId = document.getElementById("price");
    const totalPrice = document.querySelector(".total-price");
    const discountInput = document.getElementById("discount");
    const applyBtn = document.getElementById("btn-apply");
    const grandPrice = document.getElementById("grand-price");
    const btnNext = document.getElementById("btn-next");
    const nameInput = document.getElementById("name");
    const numberInput = document.getElementById("number");
    const mailInput = document.getElementById("mail");

    function handleSeatSelection(seat) {
        if (selectedSeats.length >= 4 || selectedSeats.includes(seat.textContent)) {
            // Display error message or prevent further selection
            alert('You can only select 4 seats and not one set selected multipule time.');
            return;
        }

        seat.classList.add("bg-bus-text-primary", "text-white");
        selectedSeats.push(seat.textContent);
        selectedClassName.push("Economoy");
        selectedPrice.push("550");

        totalSeat.innerText = parseInt(totalSeat.innerText) - 1;
        seatCount.innerText = parseInt(seatCount.innerText) + 1;
        selectSeat.innerText = selectedSeats.join("\n");
        className.innerText = selectedClassName.join("\n");
        priceId.innerText = selectedPrice.join("\n");

        totalPrice.innerText = calculateTotalPrice();
    }

    function calculateTotalPrice() {
        let total = selectedSeats.length * parseInt(550);
        return total;
    }

    function calculateGrandTotalPrice() {
        let grandTotal = calculateTotalPrice();
        if (discountInput.value === "NEW15") {
            grandTotal = grandTotal - (grandTotal / 100 * 15); // 15% discount 
            const discountInput = document.getElementById('discount-input');
            discountInput.style.display = 'none';
        } else if (discountInput.value === "Couple 20") {
            grandTotal = grandTotal - (grandTotal / 100 * 20); // 20% discount
            const discountInput = document.getElementById('discount-input');
            discountInput.style.display = 'none';
        }
        return grandTotal;
    }



    function applyDiscount() {
        totalPrice.innerText = calculateTotalPrice();
        grandPrice.innerText = calculateGrandTotalPrice();
    }

    for (let i = 0; i < seats.length; i++) {
        seats[i].addEventListener("click", function() {
            handleSeatSelection(seats[i]);
        });
    }

    applyBtn.addEventListener("click", applyDiscount);

}

ticketDetails(); // Call the function
