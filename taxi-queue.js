function TaxiQueue() {
	let people = 0
	let taxis = 0

	function joinQueue() {
		people++
	}

	function leaveQueue() {
		if(people>0){
			people--
		}
	}

	function joinTaxiQueue() {
		taxis++
	}

	function queueLength() {
		return people
	}

	function taxiQueueLength() {
		return taxis
	}

	function taxiDepart(){
		if(queueLength()>=12 && taxiQueueLength() >= 1){
			people = people - 12
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