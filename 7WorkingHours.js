function workingHours(input) {

    let hour = Number(input[0]);
    let day = (input[1]);

    switch (hour >= 10 && hour <= 18 && day) {

        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":

            console.log("open"); break;

        default:
            console.log("closed"); break;

    }
}

workingHours(["19", "Friday"])
workingHours(["11", "Sunday"])

