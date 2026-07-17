console.log("Video 27")

// score: good, quiet good, average, poor

const score = 8;
switch (true) {
    case (score >= 8 && score <= 10):
        console.log("good");
        break;
    case (score >= 6 && score < 8):
        console.log("quiet good");
        break;
    case (score >= 4 && score < 6):
        console.log("average");
        break;
    default:
        console.log("poor");
}