const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', () => {
        const parkingNumber = document.getElementById('parking-number').value;
        const tableNumber = document.getElementById('table-number').value;
        
        const selectedSpace = document.getElementById(`parking-space-${parkingNumber}`);
        const tableImagePath = `stolik${tableNumber}.png`;
        const parkingImagePath = `parking${parkingNumber}.png`;
        
        if (!selectedSpace.classList.contains('occupied')) 
        {
            selectedSpace.classList.add('occupied');
            
            // Tworzenie elementów <img> dla stolika
            const tableImg = document.createElement("img");
            tableImg.src = tableImagePath;
            tableImg.alt = `Stolik ${tableNumber}`;
            tableImg.style.width = "40px";
            tableImg.style.height = "40px";
            // Tworzenie elementów <img> dla miejsca parkingowego
            const parkingImg = document.createElement("img");
            parkingImg.src = parkingImagePath;
            parkingImg.alt = `Parking ${parkingNumber}`;
            parkingImg.style.width = "40px";
            parkingImg.style.height = "40px";
            // Wyczyść istniejące treści i dodaj obrazy stolika i parkingu
            selectedSpace.innerHTML = "";
            selectedSpace.appendChild(parkingImg);
            selectedSpace.appendChild(tableImg);
        } 
        else 
        {
            alert('To miejsce już jest zajęte!');
        }
    });