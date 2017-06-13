/* 
Data to lista marek samochodów sprzedawanych w latach 40 w USA.
*/
var data = {"Makes":[{"make_id":"aston-martin","make_display":"Aston Martin","make_is_common":"1","make_country":"UK"},{"make_id":"bentley","make_display":"Bentley","make_is_common":"1","make_country":"UK"},{"make_id":"bugatti","make_display":"Bugatti","make_is_common":"1","make_country":"Italy"},{"make_id":"buick","make_display":"Buick","make_is_common":"1","make_country":"USA"},{"make_id":"cadillac","make_display":"Cadillac","make_is_common":"1","make_country":"USA"},{"make_id":"chrysler","make_display":"Chrysler","make_is_common":"1","make_country":"USA"},{"make_id":"ford","make_display":"Ford","make_is_common":"1","make_country":"USA"},{"make_id":"jaguar","make_display":"Jaguar","make_is_common":"1","make_country":"UK"},{"make_id":"lincoln","make_display":"Lincoln","make_is_common":"1","make_country":"USA"},{"make_id":"maserati","make_display":"Maserati","make_is_common":"1","make_country":"Italy"},{"make_id":"maybach","make_display":"Maybach","make_is_common":"1","make_country":"Germany"},{"make_id":"mercedes-benz","make_display":"Mercedes-Benz","make_is_common":"1","make_country":"Germany"},{"make_id":"oldsmobile","make_display":"Oldsmobile","make_is_common":"1","make_country":"USA"},{"make_id":"packard","make_display":"Packard","make_is_common":"1","make_country":"USA"},{"make_id":"volvo","make_display":"Volvo","make_is_common":"1","make_country":"Sweden"},{"make_id":"willys-overland","make_display":"Willys-Overland","make_is_common":"1","make_country":"USA"}]};

//zad 1

//Za pomocą console.log wyświetl sobie obiekt data. Sprawdź, w którym atrybucie ukryte są samochody (widać to też po powyższym JSONIE) i przypisz go do zmiennej makes

var makes = [data["Makes"][0]["make_display"],data["Makes"][1]["make_display"],data["Makes"][2]["make_display"], data["Makes"][3]["make_display"], data["Makes"][4]["make_display"], data["Makes"][5]["make_display"], data["Makes"][6]["make_display"], data["Makes"][7]["make_display"], data["Makes"][8]["make_display"], data["Makes"][9]["make_display"], data["Makes"][10]["make_display"], data["Makes"][11]["make_display"], data["Makes"][12]["make_display"], data["Makes"][13]["make_display"], data["Makes"][14]["make_display"], data["Makes"][15]["make_display"]];//["make_display"], makes[1]["make_display"], makes[2]["make_display"], makes[3]["make_display"], makes[4]["make_display"], makes[5]["make_display"], makes[6]["make_display"], makes[7]["make_display"], makes[8]["make_display"], makes[9]["make_display"], makes[10]["make_display"], makes[11]["make_display"], makes[12]["make_display"], makes[13]["make_display"], makes[14]["make_display"], makes[15]["make_display"]];



//zad 2 poszukaj w google infromacji o funkcjach .map, .filter i .reduce. Za pomocą map wypisz atrybut make_display kazdeggo samochodu

makes.map(function(car) {
  console.log(car)
});

//zad 3 Za pomocą .filter wypisz tylko te samochody, które pochodzą z USA

var autosUsa = makes.filter(function(auto) {
	return auto != "Aston Martin" & auto != "Bentley" & auto != "Bugatti" & auto != "Jaguar" & auto != "Maserati" & auto != "Maybach" & auto != "Mercedes-Benz" & auto != "Volvo";
} );
console.log(autosUsa);


//zad 4 Za pomocą funkcji reduce oblicz sumę znaków nazwy każdego z modelu i przypisz sumę do zmiennej all

var all = makes.reduce(function(sum,make){
	return sum+make;
} );
console.log(all);