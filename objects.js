function Contact(first_name, second_name, phone_number, email, address_array) { // making the constructor Contact
	this.first_name = first_name;
	this.second_name = second_name;
	this.phone_number = phone_number;
	this.email = email;
	// this.address = new Address(address_array[0], address_array[1], address_array[2]) // this is an object inside Contact
	this.address = address_array
}

// another way is by making the address a constructor
function Address(street, city, country) { 
	this.street = street;
	this.city = city;
	this.country = country;}

Contact.prototype.FullName = function() { // a customised prototype to return: Ssemambo,Abbey
	return this.first_name + "," + this.second_name};

Contact.prototype.full_address = function() { // a customised prototype to return: the address in that way
	return this.address.street + "," + this.address.city};

var address1 = new Address("kayunga road, kamwoya", "Kampala", "Uganda");
// var address2 = new Address("mobutu road, Kibuye", "Kampala", "Uganda");

var contact1 = new Contact("Ssemambo", "Abbey", 0702998600, "harrisonandrew803@gmail.com", address1);

// var contact2 = new Contact("Nakito", "Noor", 0702488063, "noor@gmail.com", address2);
// var contact2 = new Contact("Nakito", "Noor", 0702488063, "noor@gmail.com", ["market", "nakasero", "uganda"]);
// var contact3 = new Contact("Ssemambo", "Abbey", 0702998600, "harrisonandrew803@gmail.com", ["kayunga road, kamwokya", "Kampala", "Uganda"]);


// contact1.FullName(); calling the Contact to print the part with the prototype 
contact1.full_address();
