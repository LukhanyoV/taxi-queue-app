// DOM element references
const passengersCount = document.querySelector(".passenger_queue_count")
const taxisCount = document.querySelector(".taxi_queue_count")
const joinQueue = document.querySelector(".join_queue")
const leaveQueue = document.querySelector(".leave_queue")
const joinTaxiQueue = document.querySelector(".join_taxi_queue")
const departBtn = document.querySelector(".depart")

// create Factory Function instance
const taxiQueue = TaxiQueue();

// write your DOM code here.
//
taxisCount.innerHTML = taxiQueue.taxiQueueLength()
//
passengersCount.innerHTML = taxiQueue.queueLength()

// DOM events
//
joinQueue.addEventListener("click", function () {
    //
    taxiQueue.joinQueue()
    //
    passengersCount.innerHTML = taxiQueue.queueLength()
})

//
leaveQueue.addEventListener("click", function () {
    //
    taxiQueue.leaveQueue()
    //
    passengersCount.innerHTML = taxiQueue.queueLength()
})

//
joinTaxiQueue.addEventListener("click", function () {
    //
    taxiQueue.joinTaxiQueue()
    //
    taxisCount.innerHTML = taxiQueue.taxiQueueLength()
})

//
departBtn.addEventListener("click", function () {
    //
    taxiQueue.taxiDepart()
    //
    taxisCount.innerHTML = taxiQueue.taxiQueueLength()
    //
    passengersCount.innerHTML = taxiQueue.queueLength()
})