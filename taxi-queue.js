function TaxiQueue(taxiCounter, peopleCounter) {
	// just in case there are counters saved on localstorage
	let people = peopleCounter || 0
	let taxis = taxiCounter || 0

	// increase the number of people when someone join a queue
	function joinQueue() {
		people++
	}

	// decrease the number of people when someone leave a queue
	function leaveQueue() {
		if(people>0){
			people--
		}
	}

	// increase the number of taxis in the queue
	function joinTaxiQueue() {
		taxis++
	}

	// return the number of people in the queue
	function queueLength() {
		return people
	}

	// return the number of taxis available
	function taxiQueueLength() {
		return taxis
	}

	function taxiDepart(){
		// if there are more than or 12 people in the queue
		// and there is also at least 1 taxi
		// then the taxi can depature
		if(queueLength()>=12 && taxiQueueLength() >= 1){
			// a taxi has to leave with 12 people
			people = people - 12
			// only one taxi can leave at a time
			taxis--
		}
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}