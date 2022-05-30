// write your DOM code here.
// this function will keep track of the counters in local storage
function addToLocalStorage(key){
    if(key === "taxi"){
        localStorage.setItem("taxiCounter", taxiQueue.taxiQueueLength())
    } else if(key === "people"){
        localStorage.setItem("peopleCounter", taxiQueue.queueLength())
    }
}

// this function will get the current counter from local storage
function getFromLocalStorage(key){
    if(key === "taxi"){
        // local storage store strings so convert back to integer
        return localStorage.getItem("taxiCounter")-""
    } else if(key === "people"){
        // local storage store strings so convert back to integer
        return localStorage.getItem("peopleCounter")-""
    }
}

// DOM element references
const passengersCount = document.querySelector(".passenger_queue_count")
const taxisCount = document.querySelector(".taxi_queue_count")
const joinQueue = document.querySelector(".join_queue")
const leaveQueue = document.querySelector(".leave_queue")
const joinTaxiQueue = document.querySelector(".join_taxi_queue")
const departBtn = document.querySelector(".depart")

// create Factory Function instance
// get the current values from local storage
const taxiQueue = TaxiQueue(getFromLocalStorage("taxi"), getFromLocalStorage("people"));

// when the page loads display the current values
// display current taxi count
taxisCount.innerHTML = taxiQueue.taxiQueueLength()
// display current passengers count
passengersCount.innerHTML = taxiQueue.queueLength()

// DOM events
// listen for when the join queue button is click
joinQueue.addEventListener("click", function () {
    // increase the number of people in the queue
    taxiQueue.joinQueue()
    // display the number of people in the queue
    passengersCount.innerHTML = taxiQueue.queueLength()
    // update the current counter to localstorage
    addToLocalStorage("people")
})

// listen for when the leave queue button is clicked
leaveQueue.addEventListener("click", function () {
    // decrease the number of people in the queue
    taxiQueue.leaveQueue()
    // display the number of people in the queue
    passengersCount.innerHTML = taxiQueue.queueLength()
    // update the current counter to localstorage
    addToLocalStorage("people")
})

// listen for when the join taxi queue button is clicked
joinTaxiQueue.addEventListener("click", function () {
    // increase the number of taxi in the queue
    taxiQueue.joinTaxiQueue()
    // show the number of taxis that are in the queue
    taxisCount.innerHTML = taxiQueue.taxiQueueLength()
    // update the current counter to localstorage
    addToLocalStorage("taxi")
})

// listen for when the depart button is pressed
departBtn.addEventListener("click", function () {
    // this function will check for the number of people available
    // and also it will chehck for the number of taxis available
    // before allowing the taxi to leave
    taxiQueue.taxiDepart()
    // show the number of taxis available after depature
    taxisCount.innerHTML = taxiQueue.taxiQueueLength()
    // show the number of passangers after depature
    passengersCount.innerHTML = taxiQueue.queueLength()
    // update the local storage after depature
    addToLocalStorage("taxi")
    addToLocalStorage("people")
})