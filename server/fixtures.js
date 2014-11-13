if (Boats.find().count() === 0) { 
	Boats.insert({
    	boatName: 'Kejser Trøjborg',
    	sailNo: '74',
        harbour: "Aarhus Sejlklub",
        boatType: "Dinette",
        color: "Hvid",
        area: "Aarhus"
  	});
	Boats.insert({
    	boatName: 'Mette',
    	sailNo: '100',
        harbour: "Aarhus Sejlklub",
        boatType: "Dinette",
        color: "Blå",
        area: "Aarhus"
	});
	Boats.insert({
    	boatName: 'Canasta',
    	sailNo: '109',
        harbour: "Aarhus Sejlklub",
        boatType: "Racing",
        color: "Hvid",
        area: "Aarhus"
	}); 
}